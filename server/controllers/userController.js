const ApiError = require("../error/apiError")
const {User} = require("../models/models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {Basket} = require("../models/models")
const {Product} = require("../models/models")
const {Shop} = require("../models/models")
const Uuid = require("uuid")

const GenerateGWT = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'}) 
}

class UserController{
    async Registrate(req, res, next){
        const {email, password, role} = req.body
        
        if(!email || !password){
            return next(ApiError.BadRequest("no email or password"))
        }
        const candidate = await User.User.findOne({where:{email}})
        if(candidate)
        {
            return next(ApiError.BadRequest("user already exists"))
        }
        const hashPass = await bcrypt.hash(password, 5)
        const NewUser = await User.User.create({email, password: hashPass, role})

        const NewBasket = await Basket.Basket.create({userId: NewUser.id})

        return res.json(GenerateGWT(NewUser.id, NewUser.email, NewUser.role))
    }
    async Login(req, res, next){
        const {email, password} = req.body

        const user = await User.User.findOne({where:{email}})

        if(!user){
            return next(ApiError.InternalError(`no user with email ${email}`))
        }
        let comparePass = bcrypt.compareSync(password, user.password)
        if(!comparePass){
            return next(ApiError.InternalError("wrond password"))
        }
        
        return res.json(GenerateGWT(user.id, user.email, user.role))
    }
    async check(req, res, next){
        return res.json(GenerateGWT(req.user.id, req.user.email, req.user.role))
    }
    async Delete(req, res){
        const idToDelete = req.params.id
        if(!Number.isNaN(Number(idToDelete))){
            const DeletedUser = await User.User.destroy({
                where: {
                    id: idToDelete
                }
            })
            return res.json(DeletedUser)
        }
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }
    async GetUsers(req, res)
    {
        const Users = await User.User.findAll()
        return res.json(Users)
    }

    async GetUserBasket(req, res, next){
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        const UserBasket = await Basket.Basket.findOne({where: {userId:decoded.id}})

        const BasketAssoc = await Basket.BasketAssoc.findAll({where: {basketId: UserBasket.id}})

        let Products = []

        BasketAssoc.forEach(element => {
            let product = Product.Product.findOne({where: {id: element.productId}})
            Products.push(product)
        });

        BasketAssoc.forEach(element => {
            let product = Product.Product.findOne({where: {id: element.productId}})
            Products.push(product)
        });

        return Promise.all(Products).then(value=>{
            return res.json(value)
        })
    }

    async MakePurchase(req, res, next){
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        
        const Buyer = await User.User.findOne({where:{id:decoded.id}})
        const UserBasket = await Basket.Basket.findOne({where: {userId:decoded.id}})

        const BasketAssoc = await Basket.BasketAssoc.findAll({where: {basketId: UserBasket.id}})

        let Products = []

        BasketAssoc.forEach(element => {
            let product = Product.Product.findOne({where: {id: element.productId}})
            Products.push(product)
        });

        Promise.all(Products).then(value=>{
            let ProductsInStock = []
            let UniqueIds = []

            value.forEach(product => {
                UniqueIds.push(product.id)
            });
            
            UniqueIds = UniqueIds.filter((val, ind, arr) => arr.indexOf(val) === ind);

            for (let i = 0; i < UniqueIds.length; i++) {
                ProductsInStock.push({})
                ProductsInStock[i].id = UniqueIds[i]
                ProductsInStock[i].amount = 0
                ProductsInStock[i].price = 0
                ProductsInStock[i].amount_on_serv = 0
            }

            for (let i = 0; i < ProductsInStock.length; i++) {
                for (let m = 0; m < value.length; m++) {
                    if(ProductsInStock[i].id == value[m].id){
                        if(ProductsInStock[i].amount < value[m].amount)
                        {
                            ProductsInStock[i].amount += 1
                            ProductsInStock[i].price += value[m].price
                        }
                        ProductsInStock[i].amount_on_serv = value[m].amount
                    }
                }
            }

            let summ = 0
            ProductsInStock.forEach(product => {
                summ += product.amount * product.price
            });
            console.log(Buyer.balance)
            console.log(summ)
            if(Buyer.balance < summ)
            {
                return next(ApiError.BadRequest("Not enough maney"))
            }

            ProductsInStock.forEach(product => {
                for(let i = 0; i < product.amount; i++){
                    let a_key = Uuid.v4()
                    Shop.Shops.create({ activation_key:a_key, productId:product.id, userId:Buyer.id })
                }
                if(product.amount_on_serv > 0)
                {
                    console.log("------------------------", UserBasket.id,product.id)
                    Basket.BasketAssoc.destroy({where:{
                        basketId:UserBasket.id,
                        productId:product.id
                    }})
                }
            });

            User.User.update({
                balance: Buyer.balance - summ
            },{
                where:{
                    id: Buyer.id
                }
            })

            ProductsInStock.forEach(product => {
                Product.Product.update({
                    amount: product.amount_on_serv - product.amount
                },{
                    where:{
                        id: product.id
                    }
                })
            });
        })
        const AllShops = await Shop.Shops.findAndCountAll({where:{userId: Buyer.id}})

        res.json(AllShops)
    }

    async AddToBasket(req, res, next){
        const {productId} = req.body
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        const UserBasket = await Basket.Basket.findOne({where: {userId:decoded.id}})
        
        console.log(UserBasket.id, productId)
        const NewBasketAssoc = await Basket.BasketAssoc.create({basketId:UserBasket.id, productId})
        return res.json(NewBasketAssoc)
    }
}

module.exports = new UserController()
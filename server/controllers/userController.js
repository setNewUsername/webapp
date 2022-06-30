const ApiError = require("../error/apiError")
const {User} = require("../models/models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {Basket} = require("../models/models")

const GenerateGWT = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'}) 
}

class UserController{
    async Registrate(req, res, next){
        const {email, password, access_rights} = req.body
        
        if(!email || !password){
            return next(ApiError.BadRequest("no email or password"))
        }
        const candidate = await User.User.findOne({where:{email}})
        if(candidate)
        {
            return next(ApiError.BadRequest("user already exists"))
        }
        const hashPass = await bcrypt.hash(password, 5)
        const NewUser = await User.User.create({email, password: hashPass, access_rights})

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
    async Authorizate(req, res, next){
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
}

module.exports = new UserController()
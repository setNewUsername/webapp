const {Product} = require("../models/models")
const ApiError = require("../error/apiError")
const Uuid = require("uuid")
const Path = require("path")
const LangAssocCont = require("./assocContrllers/languageAssocCont")
const SysReq = require("./assocContrllers/platformCharacteristicsCont")

class ProductController{
    //called by GET request; URL: api/product/
    async GetAll(req, res, next){
        try{
            let {productGenreId, productDeveloperId, productPublisherId, limit, page} = req.query
            page = page || 1
            limit = limit || 5

            let offset = page * limit - limit

            let Response = null

            if(productGenreId){
                Response = await Product.Product.findAll({where:{productGenreId}, limit, offset})
            }
            else if(productDeveloperId)
            {
                Response = await Product.Product.findAll({where:{productDeveloperId}, limit, offset})
            }
            else if(productPublisherId)
            {
                Response = await Product.Product.findAll({where:{productPublisherId}, limit, offset})
            }
            else
            {
                Response = await Product.Product.findAll({limit, offset})
            }

            return res.json(Response)
        }
        catch(e)
        {
            return next(ApiError.BadRequest(e.message))
        }
    }

    //called by GET request; URL: api/product/:id
    async Get(req, res, next){
        const idToFind = req.params.id

        if(!Number.isNaN(Number(idToFind))){
            const product = await Product.Product.findAll({
                where: {
                    id: idToFind
                }
            })

            let Response = JSON.parse(JSON.stringify(product))

            Response[0].languages = await LangAssocCont.GetLanguageNamesByProductId(idToFind)
            Response[0].systemRequrements = await SysReq.GetSystemRequirementsByProductId(idToFind)
            
            return res.json(Response)
        }
        else
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }

    //called by POST request; URL: api/product/; form-data: {name, multiplayer, price, productGenreId, productDeveloperId, productPublisherId, image(as file)}
    async Add(req, res, next){
        try{
            const {name, multiplayer, price, productGenreId, productDeveloperId, productPublisherId, languages, amount, youtube, systemRequrements} = req.body

            console.log(name, multiplayer, price, productGenreId, productDeveloperId, productPublisherId, languages, amount, youtube, JSON.parse(systemRequrements))

            const {image} = req.files
            const FileName = Uuid.v4() + ".jpg"
            image.mv(Path.resolve(__dirname, "..", "static", FileName))

            const NewProduct = await Product.Product.create({name, multiplayer, price, image:FileName, productGenreId, productDeveloperId, productPublisherId, amount, youtube})

            LangAssocCont.AddAssociations(NewProduct.id, JSON.parse(languages))
            SysReq.AddSystemRequrements(NewProduct.id, JSON.parse(systemRequrements))

            return res.json(NewProduct)
        }
        catch(e)
        {
            return next(ApiError.BadRequest(e.message))
        }
    }

    //called by DELETE request; URL: api/product/:id
    async Delete(req, res, next){
        const idToDelete = req.params.id
        if(!Number.isNaN(Number(idToDelete))){
            const DeletedProduct = await Product.Product.destroy({
                where: {
                    id: idToDelete
                }
            })
            return res.json(DeletedProduct)
        }
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }
}

module.exports = new ProductController()
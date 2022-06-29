const {Product} = require("../models/models")
const ApiError = require("../error/apiError")
const Uuid = require("uuid")
const Path = require("path")
const LangAssocCont = require("./assocContrllers/languageAssocCont")

const {Language} = require("../models/models")

class ProductController{
    //called by GET request; URL: api/product/
    async GetAll(req, res,){
        const Products = await Product.Product.findAll()
        return res.json(Products)
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

            const ProductLanguages = await Language.LanguageAssociation.findAll({
                where: {
                    productId: idToFind
                }
            })

            console.log(JSON.parse(JSON.stringify(ProductLanguages))[0])

            return res.json(product)
        }
        else
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }

    //called by POST request; URL: api/product/; form-data: {name, multiplayer, price, productGenreId, productDeveloperId, productPublisherId, image(as file)}
    async Add(req, res, next){
        try{
            const {name, multiplayer, price, productGenreId, productDeveloperId, productPublisherId, languages} = req.body

            console.log("----------------------------", JSON.parse(languages))

            LangAssocCont.AddAssociations(1, JSON.parse(languages))

            /*console.log(name, multiplayer, price, productGenreId, productDeveloperId, productPublisherId)

            const {image} = req.files
            const FileName = Uuid.v4() + ".jpg"
            image.mv(Path.resolve(__dirname, "..", "static", FileName))

            const NewProduct = await Product.Product.create({name, multiplayer, price, image:FileName, productGenreId, productDeveloperId, productPublisherId})

            return res.json(NewProduct)*/
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
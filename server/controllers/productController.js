const ProductModel = require("../models/productModel")
const ApiError = require("../error/apiError")
const Uuid = require("uuid")

class ProductController{
    //called by GET request; URL: api/product/
    async GetAll(req, res){
        const Products = await ProductModel.Product.findAll()
        return res.json(Products)
    }

    //called by GET request; URL: api/product/:id
    async Get(req, res, next){
        const idToFind = req.params.id

        if(!Number.isNaN(Number(idToFind))){
            const Product = await ProductModel.Product.findAll({
                where: {
                    id: idToFind
                }
            })
            return res.json(Product)
        }
        else
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }

    //called by POST request; URL: api/product/; body: {:name":"new_name"}
    async Add(req, res){
        const {name, publisher, developer, genre, multyplayer} = req.body
        const {img} = req.files
        const FileName = Uuid.v4() + ".jpg"
        
        const NewProduct = await ProductModel.Product.create({name})
        return res.json(NewProduct)
    }

    //called by DELETE request; URL: api/product/:id
    async Delete(req, res, next){
        const idToDelete = req.params.id
        if(!Number.isNaN(Number(idToDelete))){
            const DeletedProduct = await ProductModel.Product.destroy({
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
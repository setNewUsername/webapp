const PublisherModel = require("../models/publisherModel")
const ApiError = require("../error/apiError")

class PublisherController{
    //called by GET request; URL: api/publisher/
    async GetAll(req, res){
        const Publishers = await PublisherModel.ProductPublisher.findAll()
        return res.json(Publishers)
    }

    //called by GET request; URL: api/publisher/:id
    async Get(req, res, next){
        const idToFind = req.params.id

        if(!Number.isNaN(Number(idToFind))){
            const Publisher = await PublisherModel.ProductPublisher.findAll({
                where: {
                    id: idToFind
                }
            })
            return res.json(Publisher)
        }
        else
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }

    //called by POST request; URL: api/publisher/; body: {:name":"new_name"}
    async Add(req, res){
        const {name} = req.body
        const NewPublisher = await PublisherModel.ProductPublisher.create({name})
        return res.json(NewPublisher)
    }

    //called by DELETE request; URL: api/publisher/:id
    async Delete(req, res, next){
        const idToDelete = req.params.id
        if(!Number.isNaN(Number(idToDelete))){
            const DeletedPublisher = await PublisherModel.ProductPublisher.destroy({
                where: {
                    id: idToDelete
                }
            })
            return res.json(DeletedPublisher)
        }
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }
}

module.exports = new PublisherController()
const PublishingTypeModel = require("../models/publishingModel")

class PublishingTypeController{
    //called by GET request; URL: api/publishingtype/
    async GetAll(req, res){
        const PublishingTypes = await PublishingTypeModel.PublishingTypeName.findAll()
        return res.json(PublishingTypes)
    }

    //called by GET request; URL: api/publishingtype/:id
    async Get(req, res, next){
        const idToFind = req.params.id

        if(!Number.isNaN(Number(idToFind))){
            const PublishingType = await PublishingTypeModel.PublishingTypeName.findAll({
                where: {
                    id: idToFind
                }
            })
            return res.json(PublishingType)
        }
        else
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }

    //called by POST request; URL: api/publishingtype/; body: {:name":"new_name"}
    async Add(req, res){
        const {name} = req.body
        const NewType = await PublishingTypeModel.PublishingTypeName.create({name})
        return res.json(NewType)
    }
}

module.exports = new PublishingTypeController()
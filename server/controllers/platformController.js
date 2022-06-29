const PlatformModel = require("../models/platformModel")
const ApiError = require("../error/apiError")

class PlatformController{
    //called by GET request; URL: api/platform/
    async GetAll(req, res){
        const Platforms = await PlatformModel.Platform.findAll()
        return res.json(Platforms)
    }

    //called by GET request; URL: api/platform/:id
    async Get(req, res, next){
        const idToFind = req.params.id

        if(!Number.isNaN(Number(idToFind))){
            const Platform = await PlatformModel.Platform.findAll({
                where: {
                    id: idToFind
                }
            })
            return res.json(Platform)
        }
        else
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }

    //called by POST request; URL: api/platform/; body: {:name":"new_name"}
    async Add(req, res){
        const {name} = req.body
        const NewPlatform = await PlatformModel.Platform.create({name})
        return res.json(NewPlatform)
    }

    //called by DELETE request; URL: api/platform/:id
    async Delete(req, res, next){
        const idToDelete = req.params.id
        if(!Number.isNaN(Number(idToDelete))){
            const DeletedPlatform = await PlatformModel.Platform.destroy({
                where: {
                    id: idToDelete
                }
            })
            return res.json(DeletedPlatform)
        }
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }
}

module.exports = new PlatformController()
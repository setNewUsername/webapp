const DeveloperModel = require("../models/developerModel")
const ApiError = require("../error/apiError")

class DeveloperController{
    //called by GET request; URL: api/developer/
    async GetAll(req, res){
        const Developer = await DeveloperModel.ProductDeveloper.findAll()
        return res.json(Developer)
    }

    //called by GET request; URL: api/developer/:id
    async Get(req, res, next){
        const idToFind = req.params.id

        if(!Number.isNaN(Number(idToFind))){
            const Developer = await DeveloperModel.ProductDeveloper.findAll({
                where: {
                    id: idToFind
                }
            })
            return res.json(Developer)
        }
        else
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }

    //called by POST request; URL: api/developer/; body: {:name":"new_name"}
    async Add(req, res){
        const {name} = req.body
        const Developer = await DeveloperModel.ProductDeveloper.create({name})
        return res.json(Developer)
    }

    //called by DELETE request; URL: api/developer/:id
    async Delete(req, res, next){
        const idToDelete = req.params.id
        
        if(!Number.isNaN(Number(idToDelete))){
            const DeletedDeveloper = await DeveloperModel.ProductDeveloper.destroy({
                where: {
                    id: idToDelete
                }
            })
            return res.json(DeletedDeveloper)
        }
        else
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }
}

module.exports = new DeveloperController()
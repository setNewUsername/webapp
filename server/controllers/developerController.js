const DeveloperModel = require("../models/developerModel")

class DeveloperController{
    async GetAll(req, res){
        const Developer = await DeveloperModel.ProductDeveloper.findAll()
        return res.json(Developer)
    }
    async Get(req, res){
        const idToFind = req.params.id
        const Developer = await DeveloperModel.ProductDeveloper.findAll({
            where: {
                id: idToFind
            }
        })
        return res.json(Developer)
    }
    async Add(req, res){
        const {name} = req.body
        const Developer = await DeveloperModel.ProductDeveloper.create({name})
        return res.json(Developer)
    }
    async Delete(req, res){
        const idToDelete = req.params.id
        
        const DeletedDeveloper = await DeveloperModel.ProductDeveloper.destroy({
            where: {
                id: idToDelete
            }
        })

        return res.json(DeletedDeveloper)
    }
}

module.exports = new DeveloperController()
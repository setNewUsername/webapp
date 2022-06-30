const LanguageModel = require("../models/languageModel")
const ApiError = require("../error/apiError")

class LanguageController{
    //called by GET request; URL: api/language/
    async GetAll(req, res){
        const Languages = await LanguageModel.Language.findAll()
        return res.json(Languages)
    }

    //called by GET request; URL: api/language/:id
    async Get(req, res, next){
        const idToFind = req.params.id

        if(!Number.isNaN(Number(idToFind))){
            const Language = await LanguageModel.Language.findAll({
                where: {
                    id: idToFind
                }
            })
            return res.json(Language)
        }
        else
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }

    //called by POST request; URL: api/language/; body: {:name":"new_name"}
    async Add(req, res){
        const {name} = req.body
        const NewLanguage = await LanguageModel.Language.create({name})
        return res.json(NewLanguage)
    }

    //called by DELETE request; URL: api/language/:id
    async Delete(req, res, next){
        const idToDelete = req.params.id
        if(!Number.isNaN(Number(idToDelete))){
            const DeletedLanguage = await LanguageModel.Language.destroy({
                where: {
                    id: idToDelete
                }
            })
            return res.json(DeletedLanguage)
        }
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }
}

module.exports = new LanguageController()
const GenreModel = require("../models/genreModel")
const ApiError = require("../error/apiError")

class GenreController{
    //called by GET request; URL: api/genre/
    async GetAll(req, res){
        const Genres = await GenreModel.ProductGenre.findAll()
        return res.json(Genres)
    }

    //called by GET request; URL: api/genre/:id
    async Get(req, res, next){
        const idToFind = req.params.id

        if(!Number.isNaN(Number(idToFind))){
            const Genre = await GenreModel.ProductGenre.findAll({
                where: {
                    id: idToFind
                }
            })
            return res.json(Genre)
        }
        else
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }

    //called by POST request; URL: api/genre/; body: {:name":"new_name"}
    async Add(req, res, next){
        const {name} = req.body
        const Candidate = await GenreModel.ProductGenre.findOne({where:{name}})
        if(Candidate)
        {
            return next(ApiError.BadRequest("genre already exists"))
        }
        const NewGenre = await GenreModel.ProductGenre.create({name})
        return res.json(NewGenre)
    }

    //called by DELETE request; URL: api/genre/:id
    async Delete(req, res, next){
        const idToDelete = req.params.id
        if(!Number.isNaN(Number(idToDelete))){
            const DeletedGenre = await GenreModel.ProductGenre.destroy({
                where: {
                    id: idToDelete
                }
            })
            return res.json(DeletedGenre)
        }
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }
}

module.exports = new GenreController()
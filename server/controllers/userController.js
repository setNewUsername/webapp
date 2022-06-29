const ApiError = require("../error/apiError")
const {User} = require("../models/models")

class UserController{
    async Registrate(req, res){
        const {email, password, access_rights} = req.body
        
        const NewUser = await User.User.create({email, password, access_rights})

        return res.json(NewUser)
    }
    async Login(req, res){
        
    }
    async Authorizate(req, res, next){

        const {id} = req.query

        if(!id){
            return next(ApiError.BadRequest("No id specified"))
        }
    }
    async Delete(req, res){
        const idToDelete = req.params.id
        if(!Number.isNaN(Number(idToDelete))){
            const DeletedUser = await User.User.destroy({
                where: {
                    id: idToDelete
                }
            })
            return res.json(DeletedUser)
        }
        {
            return next(ApiError.BadRequest("String specified as id"))
        }
    }
    async GetUsers(req, res)
    {
        const Users = await User.User.findAll()
        return res.json(Users)
    }
}

module.exports = new UserController()
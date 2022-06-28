const ApiError = require("../error/apiError")

class UserController{
    async Registrate(req, res){

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
        
    }
    async GetUsers(req, res)
    {
        res.json({message: "hello"})
    }
}

module.exports = new UserController()
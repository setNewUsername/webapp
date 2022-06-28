const ApiError = require("../error/apiError")

module.exports = function (err, req, res, next){
    if (err instanceof ApiError){
        return res.status(err.StatusCode).json({message: err.Message})
    }
    return res.status(500).json({message: "Unexpected error"})
}
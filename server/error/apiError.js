class ApiError extends Error{
    constructor(StatusCode, Message){
        super();
        this.StatusCode = StatusCode
        this.Message = Message
    }

    static BadRequest(Message){
        return new ApiError(404, Message)
    }

    static InternalError(Message){
        return new ApiError(500, Message)
    }

    static Forbidden(Message){
        return new ApiError(403, Message)
    }
}

module.exports = ApiError
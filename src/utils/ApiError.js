class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        //in this curluy braces we are overwrite the data
        super(message)
        this.statusCode = statusCode
        this.data=null
        this.message=message
        this.success=false; //yha pe success false hai qki we are handling api error not api response
        this.errors=errors
         
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}
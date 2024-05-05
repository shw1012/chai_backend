class ApiResponse{
    constructor(statusCode,data,message="Success"){
        //in this curly braces we are overwriting the data 
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode < 400
    }
}
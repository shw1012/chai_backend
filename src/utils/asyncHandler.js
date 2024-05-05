// asynchandler will make a method aur phir export krdega
const asyncHandler =(requestHandler)=>{
   return(req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}
export { asyncHandler}

// const asyncHandler = () ={}
// const asyncHandler =(func) => () => {}
// const asyncHandler =(func) => async() => {}

//this is second approach of doing using try catch method
//next is used for middleware
// const asyncHandler =(fn)=>async (req,res,next) =>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }
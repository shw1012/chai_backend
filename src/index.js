// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()






















/*
//here we are using iife (immediately invoked function)
import express from "express";
const app = express()
(async ()=>{
    try {
        //in this step we just connect the database
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("express humari baat nhi sun paa rhi mtlb baat nhi kr paa rhi " ,error);
        throw error  // qki express agr sun hi nhi rhi then throw error
       })


       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })
        
    } catch (error) {
        console.error("Error: ",error)
        throw err
    }
} )()

*/
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
//cookie parser ka kaam bss itna sa hai ki hum server se user k browser ki cookie 
//excess kr paaye aur uski cookie send kr paau

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))

app.use(express.json({limit:"16kb"}))
//extended mtlb :obj k andar obj
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
// static kuch nhi krta jb hum kai baar hum kuch file pdf store krna chahte hai 
//jaise pdf file me store krna chahte hai img vgrh store krna chahte hai
app.use(cookieParser())

//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users/",userRouter)

//http://localhost:8000/api/v1/users/register   we are making this type of route




export { app }

//we will use app.use when we have middleware or we have any config setting

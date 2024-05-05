import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";  
import bcrypt from "bcrypt";
/******interview ques *****/
//jwt is a bearer token means ye token jiske bhi pass hoga mai use data bhej dungi 
/***********************************/


//as we know that direct encryption is not possible so that we take help from

//bcrypt is a lib which helps us to hash passwords
//jsonwebtoken a standardized way to securely send data between two parties.

const userSchema = new Schema(
    {
      username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
      },
      uemail:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
      },
      fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
      },
      avatar:{
        type:String,  //cloudinarily url
        required:true,
      },
      coverImage:{
        type:"String", //cloudinarily url
      },
      watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
      ],
      password:{
        type:String,
        required:[true,'Password is required']
      },
      refreshToken:{
        type:String
      }
    },{
        timestamps:true
    }
)
//next yha lia hai to sabse end me user ko call krn padta hai ki
// ab ye flag aage pass krdo

//here we are not using arrow function bcs we know that arrow fn me hum this use nhi kr sakte
//but here we have to take this .
userSchema.pre("save",async function (next){
    if(!this.isModified("password"))return next();

    this.password=bcrypt.hash(this.password,10) //yha pe 10 k field me kitne rounds lagana chahte hia vo ye puch rha hai
    next()
})
//Async hooks in Node. js are a way to keep track of asynchronous operations in a Node. js application. 

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema)


import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    username :{
        type:string,
        required:[true , "Please provide a username"],
        unique:true
    },
    email:{
        type : string, 
        required:[true , "Please provide an email"],
        unique:true
    },
    password:{
        type:string,
        required:[true , "Please provide password"],
    },
    isVerified : {
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,


    

})

const User = mongoose.models.users || mongoose.model("users" , userSchema);//users means database name and users should look like userschema that s y we are using these 2 parameters

export default User;
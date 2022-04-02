const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    
        firstName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            unique:true,
            required:true
            
        },
        password:{
            type:String,
            required:true
        },
        role : {
                type:mongoose.Schema.Types.ObjectId,
                ref:"role"
        },
        gender:{
            type:String    
        },
        mobileNum:{
            type : Number
        },
        CreatedAt:{
            type : String
        },

        isActive : {
                type:Boolean, Number,
                default:true
        }
}) 


const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel 
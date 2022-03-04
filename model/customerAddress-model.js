const mongoose = require("mongoose")

const custAddressSchema =new mongoose.Schema({
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    state:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"state"
    },
    city:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"city"
    },
    isActive:{
        type:Boolean
    }
})

const custAddressModel =mongoose.model("custmerAddress",custAddressSchema)
module.exports=custAddressModel
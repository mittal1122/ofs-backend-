const mongoose =require("mongoose")

// schema
const cartSchema =new mongoose.Schema({
    qty:{
        type:Number
    },
    vendorproduct:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vendorproduct"
    },
    user:{
    
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    offer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"offer"
    }
})

//model
const cartModel = new mongoose.model("cart",cartSchema)
module.exports= cartModel

const mongoose =require("mongoose")

const orderSchema =new mongoose.Schema({
    total:{
        type:Number
    },
    isRefund:{
        type:Boolean
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    status:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"status"
    },
    custmerAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"custmerAddress"
    }
    
})

const orderModel = mongoose.model("order",orderSchema)
module.exports= orderModel
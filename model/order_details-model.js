const mongoose=require("mongoose")

const order_detailSchema =new mongoose.Schema({
    qty:{
        type:Number
    },
    price:{
        type:Number
    },
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"order"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    vendorproduct:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vendorproduct"
    }
})

const order_detailModel = new mongoose.model("order_detail",order_detailSchema)
module.exports= order_detailModel
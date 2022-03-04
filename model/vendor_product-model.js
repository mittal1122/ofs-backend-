const mongoose = require("mongoose")

const vendorProductSchema = new mongoose.Schema({
    qty:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    product :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    vendorDetail:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"vendorDetail"
    }
})

const vendorProductModel=mongoose.model("vendorproduct",vendorProductSchema)

module.exports =vendorProductModel
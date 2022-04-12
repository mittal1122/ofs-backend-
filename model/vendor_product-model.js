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
    vendor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"vendor"
    }
})

const vendorProductModel=mongoose.model("vendorproduct",vendorProductSchema)

module.exports =vendorProductModel
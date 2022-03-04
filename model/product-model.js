const mongoose = require("mongoose")

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    baseprice:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    subcategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subcategory"
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"brand"
    }
})

const ProductModel =mongoose.model("product",productSchema)
module.exports=ProductModel
const mongoose =require("mongoose");

//schema

let BrandSchema =new mongoose.Schema({
    brandName:{
        type:String
    }
})

//model

let BrandModel = mongoose.model("brand",BrandSchema) 

module.exports = BrandModel
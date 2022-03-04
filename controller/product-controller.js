const ProductModel = require("../model/product-model")

//add 
module.exports.addProduct = function(req,res){
    let productName=req.body.productName
    let baseprice= req.body.baseprice
    let category= req.body.category
    let subcategory=req.body.subcategory
    let brand =req.body.brand

    let product= new ProductModel({
        productName:productName,
        baseprice:baseprice,
        category:category,
        subcategory:subcategory,
        brand:brand
    })
    product.save(function(err,data){
        if(err){
            res.json({msg:"SMW" ,status:-1,data:err})
        }else{
            res.json({msg:"singup done",status:200,data:data})
        }
    })
}
//list
module.exports.getAllproducts=(req,res)=>{
    ProductModel.find().populate("category").populate("subcategory").populate("brand").exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong", data:err, status:-1})
        }
        else{
            res.json({msg:"Cities ret... ", data: data,status:200})
        }
    })
}

//delete
module.exports.deleteProduct=function(req,res){
    let productId= req.params.productId

    ProductModel.deleteOne({"_id":productId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:success})
        }

    })
}

//update
module.exports.updateProduct=function(req,res){
    let productId=req.body.productId
    let productName =req.body.productName
    let baseprice=req.body.baseprice
    let category =req.body.category
    let subcategory=req.body.subcategory
    let brand=req.body.brand

    ProductModel.updateOne({_id:productId},{productName:productName,baseprice:baseprice,category:category,subcategory:subcategory,brand:brand},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}

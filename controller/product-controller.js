const res = require("express/lib/response")
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
        brand:brand,
        vendorproductimg:vendorproductimg
    })
    product.save(function(err,data){
        if(err){
            res.json({msg:"SMW" ,status:-1,data:err})
        }else{
            res.json({msg:"singup done",status:200,data:data})
        }
    })
}

// get by id

module.exports.getById= function(req,res){

    let id = req.params.productId;
  
  
    ProductModel.findById({_id:id}).populate("vendorproductimg").populate("category").populate("subcategory").populate("brand").exec(function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "users...", status: 200, data: data });
      }
    })
  }


  
//list
module.exports.getAllproducts=(req,res)=>{
    ProductModel.find().populate("vendorproductimg").populate("category").populate("subcategory").populate("brand").exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong", data:err, status:-1})
        }
        else{
            res.json({msg:"Cities ret... ", data: data,status:200})
        }
    })
}




//find one 
module.exports.getoneproducts=(req,res)=>{
    ProductModel.findOne().populate("vendorproductimg").populate("category").populate("subcategory").populate("brand").exec(function(err,data){
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

    ProductModel.deleteOne({_id:productId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:success})
        }

    })
}

//update
module.exports.updateProduct=function(req,res){
    let productId=req.params.productId
    let productName =req.body.productName
    let baseprice=req.body.baseprice
    let category =req.body.category
    let subcategory=req.body.subcategory
    let brand=req.body.brand
    let vendorproductimg = req.body.vendorproductimg

    ProductModel.updateOne({_id:productId},{productName:productName,baseprice:baseprice,category:category,subcategory:subcategory,brand:brand,vendorproductimg:vendorproductimg},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}

//update by id
module.exports.updateById= function(req,res){

    let productId=req.params.productId
    let productName =req.body.productName
    let baseprice=req.body.baseprice
    let category =req.body.category
    let subcategory=req.body.subcategory
    let brand=req.body.brand
    let vendorproductimg = req.body.vendorproductimg
    
  
    ProductModel.findByIdAndUpdate({_id:productId},{productName:productName,baseprice:baseprice,category:category,subcategory:subcategory,brand:brand,vendorproductimg:vendorproductimg},function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "Products...", status: 200, data:data });
      }
    })
  }
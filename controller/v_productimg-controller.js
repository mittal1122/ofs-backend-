
const VendorProductImgModel = require("../model/v_productImg-model")


//add
module.exports.addproductimg = function(req,res){

    let vendorproductId=req.body.vendorproductId 
    let vendor=req.body.vendorId
    let ImgUrl=req.body.ImgUrl

   let productImg = new  VendorProductImgModel({
    vendorproductId:vendorproductId, 
    vendor:vendor,
    ImgUrl:ImgUrl

   })

   productImg.save(function(err,data){
    if(err){
        res.json({msg:"something went wrong", data:err, status:-1})
    }
    else{
        res.json({msg:"add data ", data: data,status:200})
    }
})
}

//List
module.exports.getAllProductImg = function(req,res){

    VendorProductImgModel.find().populate("vendorDetail").populate("vendorproductId").exec(function(err,data){
        if(err){
            res.json({msg:"SMW", status:-1, data:err })
        }else{
            res.json({msg:"add data", status:200, data:data})
        }
    })

}

//delete
module.exports.deleteProductImg = function(req,res){
    let productImgId = req.params.productImgId

    VendorProductImgModel.deleteOne({_id:productImgId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:success})
        }
    })
}

//Update
module.exports.updateproductImg = function(req,res){
    let productImgId = req.params.productImgId
    let vendorproductId= req.body.vendorproductId 
    let vendor=req.body.vendor
    let ImgUrl=req.body.ImgUrl

    VendorProductImgModel.updateOne({_id:productImgId},{vendorproductId:vendorproductId,vendor:vendor,ImgUrl:ImgUrl},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}
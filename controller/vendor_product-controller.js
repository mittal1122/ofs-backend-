const vendorProductModel = require("../model/vendor_product-model")

//add
module.exports.addvendorProduct=function(req,res){
    let qty= req.body.qty
    let price=req.body.price
    let product=req.body.product
    let vendor=req.body.vendor

    let vendorProduct=new vendorProductModel({
        qty:qty,
        price:price,
        product:product,
        vendor:vendor
    })

    vendorProduct.save(function(err,data){
        if(err){
            res.json({msg:"something went wrong", data:err, status:-1})
        }
        else{
            res.json({msg:"singup done ", data:data,status:200})
        }
    })
}


// get by id

module.exports.getById= function(req,res){

    let id =  req.params.vendorproductId;

    vendorProductModel.findById({_id:id}).populate('product').populate('vendor').exec(function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "vendor products...", status: 200, data: data });
      }
    })
  }
//list

module.exports.getAllvendorProducts= function(req,res) {
    vendorProductModel.find().populate("product").populate("vendor").exec( function(err, data) {
        if (err) {
            res.json({ msg: "SMW", status: -1, data: err })
        } else {
            res.json({ msg: "show your list", status: 200, data: data })
        }
    })
}

//delete
module.exports.deleteVendorProduct=function(req,res){
    let vendorproductId=req.params.vendorproductId
    vendorProductModel.deleteOne({_id:vendorproductId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:success})
        }
    })

}

//update
module.exports.updatevendorProduct=function(req,res){
    let vendorproductId=req.params.vendorproductId
    let qty=req.body.qty
    let price=req.body.price
    let product=req.body.product
    let vendorDetail=req.body.vendorDetail

    vendorProductModel.updateOne({_id:vendorproductId},{qty:qty,price:price,product:product,vendorDetail:vendorDetail},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}
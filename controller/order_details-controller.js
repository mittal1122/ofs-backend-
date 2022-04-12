const orderdetailModel = require("../model/order_details-model")

// add
module.exports.addorder_detail= function(req,res){
    let qty= req.body.qty
    let price= req.body.price
    let user = req.body.user
    let order = req.body.order
    let vendorproduct= req.body.vendorproduct

    let order_detail= new orderdetailModel({
        qty:qty,
        price:price,
        user:user,
        order:order,
        vendorproduct:vendorproduct
    })

    order_detail.save(function(err,data){
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })
        }
    })
}


// get by id

module.exports.getById= function(req,res){

    let id = req.params.orderId;
  
  
    orderdetailModel.findById({_id:id},function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "order details...", status: 200, data: data });
      }
    })
  }


//LIST
module.exports.getAllOrder_details=function(req,res){
    orderdetailModel.find().populate("user").populate("order").populate("vendorproduct").exec(function(err,data){
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "show your list", data: data, status: 200 })
        }
    })
}

//delete
module.exports.deleteOrder_details=function(req,res){
    let order_detailId = req.params.order_detailId

    orderdetailModel.deleteOne({_id:order_detailId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:success})
        }
    })
}

//update
module.exports.updateoeder_details=function(req,res){
    let order_detailId=req.params.order_detailId
    let qty=req.body.qty
    let price=req.body.price
    let user=req.body.user
    let order=req.body.order
    let vendorproduct=req.body.vendorproduct

    orderdetailModel.updateOne({_id:order_detailId},{qty:qty,price:price,user:user,order:order,vendorproduct:vendorproduct},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"update...",status:200,data:data})
        }
    })
}
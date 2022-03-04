const orderModel = require("../model/order-model")

//add
module.exports.addOrder=function(req,res){
    let total= req.body.total
    let isRefund= req.body.isRefund
    let status = req.body.status
    let user = req.body.user
    let custmerAddress= req.body.custmerAddress

    let order = orderModel({
        total:total,
        isRefund:isRefund,
        status:status,
        user:user,
        custmerAddress:custmerAddress
    })

    order.save(function(err,data){
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })
        }
    })
}

//list 
module.exports.getAllOrders=function(req,res){
    orderModel.find().populate("status").populate("user").populate("address").exec(function(err,data){
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "show your list ", data: data, status: 200 })//http status code 
        }
    })
}

//delete
module.exports.deleteOrder=function(req,res){
    let orderId=req.params.orderId

    orderModel.deleteOne({_id:orderId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:success})
        }
    })
}

//update
module.exports.updateOrder=function(req,res){
    let orderId=req.body.orderId
    let total=req.body.total
    let isRefund= req.body.isRefund
    let status= req.body.status
    let user=req.body.user
    let custmerAddress=req.body.custmerAddress

    orderModel.updateOne({_id:orderId},{total:total,isRefund:isRefund,status:status,user:user,custmerAddress:custmerAddress},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
   
}
const paymentModel = require("../model/payment-model")

//add
module.exports.addpayment = function(req,res){
    let  totalAmount= req.body.totalAmount
    let refNum = req.body.refNum
    let isRefundprocess = req.body.isRefundprocess
    let order =req.body.order
    let user = req.body.user
    
    
    let payment = new paymentModel({
        totalAmount:totalAmount,
        refNum:refNum,
        isRefundprocess:isRefundprocess,
        order:order,
        user:user
        
    })  
    payment.save(function(err,data){
        if(err){
            res.json({msg:"SMW" , status:-1, data:err })
        } else{
            res.json({msg:"signup ", status:200, data:data})
        }
    })
}

// list 
module.exports.getAllpayments=function(req,res){
    paymentModel.find().populate("order").populate("user").exec(function(err,data){
        if(err){
            res.json({msg:"SMW" , status:-1, data:err })
        } else{
            res.json({msg:"show all payments ", status:200, data:data})
        }
    })
}


//delete
module.exports.deletepayment=function(req,res){
    let paymentId= req.params.paymentId

    paymentModel.deleteOne({_id:paymentId},function(err,data){
        if(err){
            res.json({msg:"SMW" , status:-1, data:err })
        } else{
            res.json({msg:"delete data ", status:200, data:data})
        }
    })
}

//update
module.exports.updatepayment= function(req,res){
    let paymentId= req.params.paymentId
    let totalAmount = req.body.totalAmount
    let isRefundprocess = req.body.isRefundprocess
    let user =req.body.user
    let order =req.body.order
    let refNum = req.body.refNum

    paymentModel.updateOne({_id:paymentId},{totalAmount:totalAmount,isRefundprocess:isRefundprocess,user:user,order:order,refNum:refNum},function(err,data){
        if(err){
            res.json({msg:"SMW" , status:-1, data:err })
        } else{
            res.json({msg:"updated data  ", status:200, data:data})
        }
    })
}
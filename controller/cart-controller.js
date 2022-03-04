const cartModel=require("../model/cart-model")

//add
module.exports.addcart= function(req,res){
    let qty= req.body.qty
    let user= req.body.user
    let vendorproduct = req.body.vendorproduct
    let offer =req.body.offer

    let cart =new cartModel({
        qty:qty,
        user:user,
        vendorproduct:vendorproduct,
        offer:offer
    })

    cart.save(function(err,data){
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}

//list
module.exports.getAllcarts=function(req,res){
    cartModel.find().populate("user").populate("vendorproduct").populate("offer").exec(function(err,data){
        if (err) {
            res.json({ msg: "SMW", status: -1, data: err })
        } else {
            res.json({ msg: "show your list", status: 200, data: data })
        }

    })
}

//delete
module.exports.deletecart=function(req,res){

    let cartId=req.params.cartId

    cartModel.deleteOne({_id:cartId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:success})
        }
    })
}

//update
module.exports.updatecart=function(req,res){
    let cartId=req.body.cartId
    let qty= req.body.qty
    let vendorproduct=req.body.vendorproduct
    let user=req.body.user
    let offer=req.body.offer

    cartModel.updateOne({_id:cartId},{qty:qty,vendorproduct:vendorproduct,usre:user,offer:offer},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}
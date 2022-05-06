const cartModel=require("../model/cart-model")
const productModel=require("../model/product-model")
const vendorProductModel=require("../model/vendor_product-model")
const userModel=require("../model/user-model")
const vendorProductImgModel =require("../model/v_productImg-model")

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

module.exports.getAllcartsNew= async function (req,res){
    let data = [];
    let URLUserId = req.params.userId;

    let allCartData = await cartModel.find({"user" : URLUserId});

    for(let i=0;i < allCartData.length; i++) {
        let eachData = [];
        let eachCartData = allCartData[i];
        let userId = eachCartData.user;
        let vendorId = eachCartData.vendorproduct;
        
        let userDetails = await userModel.findOne({"_id": userId});
        let vendorDetails = await vendorProductModel.findOne({"_id": vendorId});

        let productId = await vendorDetails.product;

        let productDetails = await productModel.findOne({"_id": productId});
        let productImgId = productDetails.vendorproductimg; 

        let productUrl = await vendorProductImgModel.findOne({"_id" : productImgId})

        eachData.push(eachCartData)
        eachData.push(userDetails)
        eachData.push(vendorDetails)
        eachData.push(productDetails)
-       eachData.push(productUrl)
        data.push(eachData);
    }

    if (data) {
        res.json({
          msg: "Cart Products info ret...",
          data: [data],
          status: 200,
        });
      } else {
        res.json({
          msg: "Cannot retrieve cart products info.",
          data: [],
          status: -1,
        });
      }
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
    let cartId=req.params.cartId
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
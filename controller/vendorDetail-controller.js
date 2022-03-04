
const vendorDetailModel = require("../model/vendorDetail-model")

//add
module.exports.addvendorDetail =function( req,res){

    let vendorName =req.body.vendorName
    let address = req.body.address
    let email = req.body.email
    let contactNumber= req.body.contactNumber
    let pincode = req.body.pincode
    let user = req.body.user
    let state = req.body.state
    let city = req.body.city

    let vendorDetail =new vendorDetailModel({

     vendorName:vendorName,
     address:address,
     email:email,
     contactNumber:contactNumber,
     pincode:pincode,
     user:user,
     state:state,
     city:city
    })

    vendorDetail.save(function(err,data){
        if(err){
            res.json({msg:"something went wrong", data:err, status:-1})
        }
        else{
            res.json({msg:"singup done ", data: data,status:200})
        }
    })


}

//list

module.exports.getAllvendorDetails = function(req,res){

    vendorDetailModel.find().populate("user").populate("state").populate("city").exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong", data:err, status:-1})
        }
        else{
            res.json({msg:"Cities ret... ", data: data,status:200})
        }
    })
}

//delete

module.exports.deletevendorDetail = function(req,res){
     let vendorId = req.params.vendorId

     vendorDetailModel.deleteOne({"_id":vendorId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:success})
        }
    })
}


//update

module.exports.updatevendorDetails =function(req,res){      
    let vendorId =req.body.vendorId
    let vendorName=req.body.vendorName
    let contactNumber=req.body.contactNumber
    let address =req.body.address
    let email =req.body.email
    let pincode = req.body.pincode
    let user = req.body.user
    let state = req.body.state
    let city = req.body.city
             
        
    vendorDetailModel.updateOne({_id:vendorId},{vendorName:vendorName,contactNumber:contactNumber,address:address,email:email,pincode:pincode,user:user,state:state,city:city},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}
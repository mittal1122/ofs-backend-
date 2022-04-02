
const vendorModel = require("../model/vendor-model")

//add
module.exports.addvendor =function( req,res){

    let vendorName =req.body.vendorName
    let address = req.body.address
    let email = req.body.email
    let contactNumber= req.body.contactNumber
    let pincode = req.body.pincode
    let user = req.body.user
    let state = req.body.state
    let city = req.body.city

    let vendor =new vendorModel({

     vendorName:vendorName,
     address:address,
     email:email,
     contactNumber:contactNumber,
     pincode:pincode,
     user:user,
     state:state,
     city:city,
     isActive:req.body.isActive
    })

    vendor.save(function(err,data){
        if(err){
            res.json({msg:"something went wrong", data:err, status:-1})
        }
        else{
            res.json({msg:"singup done ", data: data,status:200})
        }
    })


}

// get by id

module.exports.getById= function(req,res){

    let id = req.params.vendorId;
  
  
    vendorModel.findById({_id:id},function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "vendor...", status: 200, data: data });
      }
    })
  }

//list

module.exports.getAllvendor = function(req,res){

    vendorModel.find().populate("user").populate("state").populate("city").exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong", data:err, status:-1})
        }
        else{
            res.json({msg:"vendor ret... ", data: data,status:200})
        }
    })
}

//delete

module.exports.deletevendor = function(req,res){
     let vendorId = req.params.vendorId

     vendorModel.deleteOne({"_id":vendorId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:success})
        }
    })
}

//update by id
module.exports.updateById= function(req,res){

    let id = req.params.vendorId;
    let vendorName=req.body.vendorName
    let contactNumber=req.body.contactNumber
    let address =req.body.address
    let email =req.body.email
    let pincode = req.body.pincode
    let user = req.body.user
    let state = req.body.state
    let city = req.body.city
    let isActive = req.body.isActive
  
    vendorModel.findByIdAndUpdate({_id:id},{vendorName:vendorName,contactNumber:contactNumber,address:address,email:email,pincode:pincode,user:user,state:state,city:city,isActive:isActive},function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "roles...", status: 200, data: data });
      }
    })
  }

//update

module.exports.updatevendor =function(req,res){      
    let vendorId =req.params.vendorId
    let vendorName=req.body.vendorName
    let contactNumber=req.body.contactNumber
    let address =req.body.address
    let email =req.body.email
    let pincode = req.body.pincode
    let user = req.body.user
    let state = req.body.state
    let city = req.body.city
    let isActive = req.body.isActive
        
    vendorModel.updateOne({_id:vendorId},{vendorName:vendorName,contactNumber:contactNumber,address:address,email:email,pincode:pincode,user:user,state:state,city:city,isActive:isActive},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}
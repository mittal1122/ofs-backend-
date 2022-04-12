const custAddressModel= require("../model/customerAddress-model")

// add
module.exports.addcustAddress=function(req,res){
    let address= req.body.address
    let pincode= req.body.pincode
    let user = req.body.user
    let state= req.body.state
    let city = req.body.city
    


    let custAddress= new custAddressModel({
        address:address,
        pincode:pincode,
        user:user,
        state:state,
        city:city,
        isActive:req.body.isActive
    })

    custAddress.save(function(err,data){
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

    let id = req.params.custAddressId;
    
    UserModel.findById({_id:id}).populate("state").populate("city").populate('user').exec(function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "users...", status: 200, data: data });
      }
    })
  }
//list
module.exports.getAllcusAddresses=function(req,res){
    custAddressModel.find().populate("user").populate("state").populate("city").exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong", data:err, status:-1})
        }
        else{
            res.json({msg:"Cities ret... ", data:data,status:200})
        }
    })
}

//delete
module.exports.deletecustAddress= function(req,res){
    let custAddressId = req.params.custAddressId

    custAddressModel.deleteOne({"_id":custAddressId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:success})
        }
    })

}
//update
module.exports.updatecustAddress=function(req,res){
    let custAddressId=req.params.custAddressId
    let address=req.body.address
    let pincode=req.body.pincode
    let user= req.body.user
    let state= req.body.state
    let city= req.body.state
    let isActive= req.body.isActive

    custAddressModel.updateOne({_id:custAddressId},{address:address,pincode:pincode,user:user,state:state,city:city,isActive:isActive},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}

//update by id
module.exports.updateById= function(req,res){

    let id = req.params.custAddressId;
    let address=req.body.address
    let pincode=req.body.pincode
    let user= req.body.user
    let state= req.body.state
    let city= req.body.state
    let isActive= req.body.isActive
    
  
    UserModel.findByIdAndUpdate({_id:id},{address:address,pincode:pincode,user:user,state:state,city:city,isActive:isActive},function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "users...", status: 200, data: data });
      }
    })
  }
  
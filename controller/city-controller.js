const CityModel = require("../model/city-model")

//add
module.exports.addCity =function(req,res){

    let cityName =req.body.cityName
    let state =req.body.state
    

    let city =new CityModel({
        cityName :cityName,
        state :state,
        isActive:req.body.isActive
    })

    city.save(function(err,data){
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
    let id = req.params.cityId;
    CityModel.findById({_id:id}).populate("state").exec(function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "cities...", status: 200, data:data });
      }
    })
  }

//list
module.exports.getAllcities =function(req,res){

    CityModel.find().populate("state").exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong", data:err, status:-1})
        }
        else{
            res.json({msg:"Cities ret... ", data: data,status:200})
        }
    })
}


 // get by state id

 module.exports.getByStateId= function(req,res){

    let id =  req.params.stateId;
  console.log(id)
  
    CityModel.find({state:id}).populate('state').exec(function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "city...123", status: 200, data: data });
      }
    })
  }

//delete

module.exports.deleteCity = function(req,res){
    let cityId = req.params.cityId

    CityModel.deleteOne({"_id":cityId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:success})
        }
    })
}


//update

module.exports.updateCity = function(req,res){

    let cityId = req.params.cityId 
    let cityName =req.body.cityName
    let state = req.body.state
    let isActive =req.body.isActive


    CityModel.updateOne({_id:cityId},{cityName:cityName,state:state,isActive:isActive},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}


//update by id
module.exports.updateById= function(req,res){

    let id = req.params.cityId;
    let cityName =req.body.cityName
    let state = req.body.state
    let isActive =req.body.isActive
  
    UserModel.findByIdAndUpdate({_id:id},{cityName:cityName,state:state,isActive:isActive},function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "users...", status: 200, data: data });
      }
    })
  }
  
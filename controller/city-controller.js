const CityModel = require("../model/city-model")

//add
module.exports.addCity =function(req,res){

    let cityName =req.body.cityName
    let state =req.body.state

    let city =new CityModel({
        cityName :cityName,
        state :state
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
    let state = req.body.state

    CityModel.updateOne({_id:cityId},{state:state},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
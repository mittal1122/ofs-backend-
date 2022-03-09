const customModel = require("../model/customization-model")

//add
module.exports.addcustomization = function(req,res){
    let Type= req.body.Type
    let Discription = req.body.Discription
    let user = req.body.user

    let custom = customModel({
        Type:Type,
        Discription:Discription,
        user:user
    })
    custom.save(function(err,data){
        if(err){
            res.json({msg:"SMW" , status:-1, data:err })
        } else{
            res.json({msg:"signup ", status:200, data:data})
        }

    })
}

//list 
module.exports.getAllcustomization = function(req,res){
    customModel.find(function(err,data){
        if(err){
            res.json({msg:"SMW" , status:-1, data:err })
        } else{
            res.json({msg:"show youre list  ", status:200, data:data})
        }

    })
}
//delete
module.exports.deletecustomization = function(req,res){
    let customId = req.param.customId

    customModel.deleteOne({_id:customId},function(err,success){
        if(err){
            res.json({msg:"SMW" , status:-1, data:err })
        } else{
            res.json({msg:"delete....  ", status:200, data:data})
        }
    })
}

//update

module.exports.upadatecustomization=function(req,res){
    let customId= req.param.customId
    let Type = req.body.Type
    let Discription=req.body.Discription
    let user=req.body.user

    customModel.updateOne({_id:customId},{Type:Type,Discription:Discription,user:user},function(err,data){
        if(err){
            res.json({msg:"SMW" , status:-1, data:err })
        } else{
            res.json({msg:"updated....  ", status:200, data:data})
        }
    })
}

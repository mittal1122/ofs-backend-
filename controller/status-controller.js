const StateModel = require("../model/state-model")
const statusModel = require("../model/status-model")

//add

module.exports.addStatus=function(req,res){
    let status = req.body.status

    let statuses = new statusModel({
        status:status
    })

    statuses.save(function(err,data){
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}

//list
module.exports.getAllstatus=function(req,res){
    statusModel.find(function(err,data){
        if (err) {
            res.json({ msg: "SMW", status: -1, data: err })
        } else {
            res.json({ msg: "show your list", status: 200, data: data })
        }
    })
}

//delete
module.exports.deleteStatus=function(req,res){
    let statusId= req.params.statusId

    statusModel.deleteOne({_id:statusId},function(err,success){
        if(err){
        res.json({msg:"Something went wrong!!!",status:-1,data:err})
    }else{
        res.json({msg:"removed...",status:200,data:success})
    }
    })
}

//update
module.exports.updatestatus=function(req,res){
    let status=req.body.status
    let statusId= req.params.statusId

    statusModel.updateOne({_id:statusId},{status:status},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}
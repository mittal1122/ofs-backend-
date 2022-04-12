const mongoose = require("mongoose")

//schema
let StateSchema =new mongoose.Schema({
    stateName:{
        type:String,
        required:true
    }
    
})

//model

let StateModel = mongoose.model("state",StateSchema)

module.exports = StateModel
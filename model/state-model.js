const mongoose = require("mongoose")

//schema
let StateSchema =new mongoose.Schema({
    stateName:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean
    }
    
})

//model

let StateModel = mongoose.model("state",StateSchema)

module.exports = StateModel
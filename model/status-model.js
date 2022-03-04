const mongoose =require("mongoose")

const statusSchema = new mongoose.Schema({
    status:{
        type:String,
        required:true
    }
})

const statusModel = new mongoose.model("status",statusSchema)
module.exports = statusModel
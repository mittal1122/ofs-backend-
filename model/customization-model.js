const mongoose=require("mongoose")

const customSchema = mongoose.Schema({
    Type:{
        type:String
    },
    Discription:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const customModel = mongoose.model("customization",customSchema)

module.exports = customModel
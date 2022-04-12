const mongoose = require ("mongoose")

const FeedbackSchema = new mongoose.Schema ({
    type :{
        type:String
    },
    title :{
        type:String
    },
    content :{
        type:String
    },
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    vendor :{
        type :mongoose.Schema.Types.ObjectId,
        ref:"vendor"
    },
    resolve :{
        type :Boolean
    },
    vendorAns :{
        type:String
    },
    adminAns :{
        type : String
    },
    createdAt :{
        type:String
    }
    
})


const feedbackModel = new mongoose.model("feedback",FeedbackSchema)

module.exports = feedbackModel
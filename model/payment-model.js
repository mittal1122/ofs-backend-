const mongoose = require("mongoose")

//schema
const paymentSchema = new mongoose.Schema({
    
    totalAmount:{
        type:Number                                             
    },
    refNum:{
        type:String
    },
    isRefundprocess:{
        type:Boolean
    },
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"order"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    mode :{
        type:String,
        require:true
    },
    status :{
        type :Boolean
    }

})
 

//model

const paymentModel = new mongoose.model("payment",paymentSchema)

module.exports  = paymentModel
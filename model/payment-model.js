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
        type:String
    },
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"order"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

})
 

//model

const paymentModel = new mongoose.model("payment",paymentSchema)

module.exports  = paymentModel
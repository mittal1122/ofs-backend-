const mongoose =require("mongoose")

const OfferSchema =new mongoose.Schema({
    offer:{
        type:String
    },
    offerEndDate:{
        type:String,
        require:true
    },
    maxDiscount:{
        type:Number
    },
    isActive:{
        type:Boolean
    }
})

const OfferModel= mongoose.model("offer",OfferSchema)

module.exports = OfferModel
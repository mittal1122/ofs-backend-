const mongoose =require("mongoose")

const vendorSchema = new mongoose.Schema({
    vendorName:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    contactNumber:{
        type:String,
        require:true
    },
    pincode:{
        type:Number,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    state:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"state"
    },
    city:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"city"
    },
    isActive:{
        type:Boolean
    }


})

const vendorModel = mongoose.model("vendor",vendorSchema)

module.exports=vendorModel
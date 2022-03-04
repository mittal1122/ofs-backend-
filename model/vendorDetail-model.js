const mongoose =require("mongoose")

const vendorDetailSchema = new mongoose.Schema({
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
    }


})

const vendorDetailModel = mongoose.model("vendorDetail",vendorDetailSchema)

module.exports=vendorDetailModel
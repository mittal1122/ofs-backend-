const mongoose = require ("mongoose")

const VenderProductImgSchema = new mongoose.Schema({
    vendorproductId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vendorproduct"
    },
    vendor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vendor"
    },
    ImgUrl:{
        type:String,
        required:true
    }

})

const VendorProductImgModel = new mongoose.model("vendorproductimg",VenderProductImgSchema)
 module.exports=VendorProductImgModel
		
					
					
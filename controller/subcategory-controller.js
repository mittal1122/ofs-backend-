const SubcategoryModel = require("../model/subcategory-model")

//add
module.exports.addSubcategory = function(req,res) {

    let subcategoryName = req.body.subcategoryName
    let category = req.body.category
    let isActive = req.body.isActive

    let subcategory =new SubcategoryModel({
        subcategoryName:subcategoryName,
        category:category,
        isActive:isActive
    })
    subcategory.save(function (err,data){
        if(err){
            res.json({ msg: "SMW", data:err, status:-1})
        }else{
            res.json({msg: "Signup done", data:data, status:200})
        }
    })
}

// get by id

module.exports.getById= function(req,res){

    let id =  req.params.subcategoryId;
  
  
    SubcategoryModel.findById({_id:id}).populate('category').exec(function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "SubCategories...", status: 200, data: data });
      }
    })
  }


  // get by category id

module.exports.getByCategoryId= function(req,res){

    let id =  req.params.categoryId;
  console.log(id)
  
    SubcategoryModel.find({category:id}).populate('category').exec(function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "SubCategories...123", status: 200, data: data });
      }
    })
  }

//list
module.exports.getAllSubcategories = function (req,res){
    SubcategoryModel.find().populate("category").exec(function (err, data){
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "subcategories ret...", data: data, status: 200 })
        }
    })
}


//delete
module.exports.deleteSubcategory = function(req,res){
    //params Subcategoryid 
    let subcategoryId = req.params.subcategoryId //postman -> userid 

    SubcategoryModel.deleteOne({_id:subcategoryId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update 

module.exports.updateSubcategory = function(req,res){
     
    let subcategoryId = req.params.subcategoryId 
    let subcategoryName = req.body.subcategoryName
    let isActive = req.body.isActive

    SubcategoryModel.updateOne({_id:subcategoryId},{subcategoryName:subcategoryName,isActive:isActive},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}
//update by id
module.exports.updateById= function(req,res){
    let id = req.params.subcategoryId 
    let subcategoryName = req.body.subcategoryName
    let isActive = req.body.isActive
    SubcategoryModel.findByIdAndUpdate({_id:id},{subcategoryName:subcategoryName,isActive:isActive},function(err,data){
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "roles...", status: 200, data: data });
      }
    })
  }
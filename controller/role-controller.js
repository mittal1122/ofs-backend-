const RoleModel = require("../model/role-model");

module.exports.addRole = function (req, res) {
  //db insert role

  console.log(req.body.roleName);

  let role = new RoleModel({
    roleName: req.body.roleName,
  });

  role.save(function (err, success) {
    if (err) {
      // console.log(err)
      res.json({ msg: "SMW", status: -1, data: req.body });
    } else {
      res.json({ msg: "role added", status: 200, data: success });
    }
  }); 
  //res.json({msg:'role added', status:200, data:req.body})
};

//list
module.exports.getAllRoles = function (req, res) {

  //REST
  RoleModel.find(function (err, roles) {
    if (err) {
      res.json({ msg: "Something went wrong!!!", status: -1, data: err });
    } else {
      res.json({ msg: "roles...", status: 200, data: roles });
    }
  });
};



// get by id

module.exports.getById= function(req,res){

  let id = req.params.roleId;


  RoleModel.findById({_id:id},function(err,data){
    if (err) {
      res.json({ msg: "Something went wrong!!!", status: -1, data: err });
    } else {
      res.json({ msg: "roles...", status: 200, data: data });
    }
  })
}


// delete
module.exports.deleteRole = function (req, res) {
  let roleId = req.params.roleId;

  //delete from role where roleId = 1
  RoleModel.deleteOne({ _id: roleId }, function (err, data) {
    if (err) {
      res.json({ msg: "Something went wrong!!!", status: -1, data: err });
    } else {
      res.json({ msg: "removed...", status: 200, data: data });
    }
  });
};


//update
module.exports.updateRole = function (req, res) {
  //update role set roleName = admin where roleId = 12121
  let roleId = req.params.roleId;
  let roleName = req.body.roleName;

  RoleModel.updateOne(
    { _id: roleId },
    { roleName: roleName },
    function (err, data) {
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "updated...", status: 200, data: data });
      }
    }
  );
};


//update by id
module.exports.updateById= function(req,res){

  let id = req.params.roleId;
  let roleName=req.body.roleName

  RoleModel.findByIdAndUpdate({_id:id},{roleName:roleName},function(err,data){
    if (err) {
      res.json({ msg: "Something went wrong!!!", status: -1, data: err });
    } else {
      res.json({ msg: "roles...", status: 200, data: data });
    }
  })
}


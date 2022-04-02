const feedbackModel = require("../model/feedback-model");

//add
module.exports.addfeedback = function (req, res) {
  let feedback = new feedbackModel({
    type: req.body.type,
    title: req.body.title,
    content: req.body.content,
    user: req.body.user,
    vendor: req.body.vendor,
    resolve: req.body.resolve,
    vendorAns: req.body.vendorAns,
    adminAns: req.body.adminAns,
    createdAt: req.body.createdAt,
  });

  feedback.save(function (err, data) {
    if (err) {
      res.json({ msg: "something went wrong", data: err, status: -1 });
    } else {
      res.json({ msg: "singup done ", data: data, status: 200 });
    }
  });
};

//List
module.exports.getAllfeedbacks = function (req, res) {
  feedbackModel
    .find()
    .populate("user")
    .populate("vendor")
    .exec(function (err, data) {
      if (err) {
        res.json({ msg: "something went wrong", data: err, status: -1 });
      } else {
        res.json({ msg: "Cities ret... ", data: data, status: 200 });
      }
    });
};

//delete
module.exports.deleteFeedback = function (req, res) {
  let feedbackId = req.body.feedbackId;

  feedbackModel.deleteOne({ _id: feedbackId }, function (err, success) {
    if (err) {
      res.json({ msg: "Something went wrong!!!", status: -1, data: err });
    } else {
      res.json({ msg: "removed...", status: 200, data: success });
    }
  });
};

//update
module.exports.updateFeedback = function (req, res) {
  let feedbackId = req.body.feedbackId;
  let type = req.body.type;
  let title = req.body.title;
  let content = req.body.content;
  let user = req.body.user;
  let vendor = req.body.vendor;
  let resolve = req.body.resolve;
  let vendorAns = req.body.vendorAns;
  let adminAns = req.body.adminAns;
  let createdAt = req.body.createdAt;

  feedbackModel.updateOne(
    { _id: feedbackId },
    {
      type: type,
      title: title,
      content: content,
      user: user,
      vendor: vendor,
      resolve: resolve,
      vendorAns: vendorAns,
      adminAns: adminAns,
      createdAt: createdAt,
    },
    function (err, data) {
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "updated...", status: 200, data: data });
      }
    }
  );
};

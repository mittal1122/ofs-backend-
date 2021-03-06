const OfferModel = require("../model/offer-model");

//add
module.exports.addOffer = function (req, res) {
  let offer = req.body.offer;
  let offerEndDate = req.body.offerEndDate;
  let maxDiscount = req.body.maxDiscount;
  let isActive = req.body.isActive;

  let Offer = new OfferModel({
    offer: offer,
    offerEndDate: offerEndDate,
    maxDiscount: maxDiscount,
    isActive: isActive,
  });

  Offer.save(function (err, data) {
    if (err) {
      res.json({ msg: "Something Went Wrong", status: -1, data: err });
    } else {
      res.json({ msg: "signup done ", status: 200, data: data });
    }
  });
};


// get by id

module.exports.getById= function(req,res){

  let id = req.params.offerId;


  OfferModel.findById({_id:id},function(err,data){
    if (err) {
      res.json({ msg: "Something went wrong!!!", status: -1, data: err });
    } else {
      res.json({ msg: "users...", status: 200, data: data });
    }
  })
}

//list

module.exports.getAllOffers = function (req, res) {
  OfferModel.find(function (err, data) {
    if (err) {
      res.json({ msg: "something went wrong", data: err, status: -1 });
    } else {
      res.json({ msg: "Cities ret... ", data: data, status: 200 });
    }
  });
};

//delete
module.exports.deleteOffer = function (req, res) {
  let offerId = req.params.offerId;

  OfferModel.deleteOne({ _id: offerId }, function (err, success) {
    if (err) {
      res.json({ msg: "Something went wrong!!!", status: -1, data: err });
    } else {
      res.json({ msg: "removed...", status: 200, data: success });
    }
  });
};

//update by id
module.exports.updateById= function(req,res){

  let id = req.params.offerId;
  let offer = req.body.offer;
  let maxDiscount = req.body.maxDiscount;
  let offerEndDate = req.body.offerEndDate;
  let isActive = req.body.isActive;
  

  UserModel.findByIdAndUpdate({_id:id},{offer: offer, offerEndDate: offerEndDate, maxDiscount: maxDiscount,isActive:isActive},function(err,data){
    if (err) {
      res.json({ msg: "Something went wrong!!!", status: -1, data: err });
    } else {
      res.json({ msg: "users...", status: 200, data: data });
    }
  })
}

//update
module.exports.updateOffer = function (req, res) {
  let offerId = req.params.offerId;
  let offer = req.body.offer;
  let maxDiscount = req.body.maxDiscount;
  let offerEndDate = req.body.offerEndDate;
  let isActive = req.body.isActive;

  OfferModel.updateOne(
    { _id: offerId },
    { offer: offer, offerEndDate: offerEndDate, maxDiscount: maxDiscount,isActive:isActive },
    function (err, data) {
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "updated...", status: 200, data: data });
      }
    }
  );
};

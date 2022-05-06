const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileupload = require('express-fileupload');
// app.use(fileupload());

const roleController = require("./controller/role-controller");
const categoryController = require("./controller/category-controller");
const brandController = require("./controller/brand-controller");
const userController = require("./controller/user-controller");
const subcategoryController = require("./controller/subcategory-controller");
const stateController = require("./controller/state-controller");
const cityController = require("./controller/city-controller");
const vendorController = require("./controller/vendor-controller");
const custAddressController = require("./controller/customerAddress-controller");
const productController = require("./controller/product-controller");
const vendorProductController = require("./controller/vendor_product-controller");
const offerController = require("./controller/offer-controller");
const cartController = require("./controller/cart-controller");
const statusController = require("./controller/status-controller");
const orderController = require("./controller/order-controller");
const orderDetailController = require("./controller/order_details-controller");
const customController = require("./controller/customization-controller");
const paymentController = require("./controller/payment.-controller");
const VProductImgController = require("./controller/v_productimg-controller")

const app = express();
app.use(cors());


// express is middle ware
app.use(express.json()); //express run server live
app.use(express.urlencoded({ extended: true })); //for create or scan emogis or othen sign


//database
mongoose.connect(
  "mongodb://localhost:27017/ofs",
  function (
    err //for link db to server
  ) {
    if (err) {
      console.log("db connection fail...");
      console.log(err);
    } else {
      console.log("db connected...");
    }
  }
);

// const express = require("express")
const sesssion_controller = require("./controller/sesssion_controller");
// get method calling

app.get("/", function (req, res) {
  res.write("welcome in my office....");
  res.end();
});


// app.get("/login", sesssion_controller.login);
// app.get("/signup", sesssion_controller.signup);
// app.post("/saveuser", sesssion_controller.saveuser);



//roles
app.post("/roles", roleController.addRole);
app.get("/roles", roleController.getAllRoles);
app.get("/roles/:roleId",roleController.getById);
app.delete("/roles/:roleId", roleController.deleteRole);
// app.put("/roles/:roleId", roleController.updateRole);
app.put("/roles/:roleId", roleController.updateById);




//users
app.post("/users", userController.addUser);
app.get("/users", userController.getAllUsers);
app.get("/users/:userId", userController.getById);
app.delete("/users/:userId", userController.deleteUser);
// app.put("/users/:userId", userController.updateUser);
app.put("/users/:userId", userController.updateById);
app.post("/login", userController.login);
app.post("/loginadmin",userController.loginAdmin)

//category
app.post("/categories", categoryController.addCategories);
app.get("/categories", categoryController.getAllCategories);
app.get("/categories/:categoryId", categoryController.getById);
app.delete("/categories/:categoryId", categoryController.deleteCategory);
// app.put("/categories/:categoryId", categoryController.updateCategory);
app.put("/categories/:categoryId", categoryController.updateById);


//subcategory
app.post("/subcategories", subcategoryController.addSubcategory);
app.get("/subcategories", subcategoryController.getAllSubcategories);
app.get("/subcategories/:subcategoryId", subcategoryController.getById);
app.get("/subcategoriesbycategory/:categoryId", subcategoryController.getByCategoryId);
app.delete(
    "/subcategories/:subcategoryId",
  subcategoryController.deleteSubcategory
);
// app.put("/subcategories/:subcategoryId", subcategoryController.updateSubcategory);
app.put("/subcategories/:subcategoryId", subcategoryController.updateById);


//brand
app.post("/brands", brandController.addBrands);
app.get("/brands", brandController.getAllBrand);
app.get("/brands/:brandId", brandController.getById);
app.delete("/brands/:brandId", brandController.deleteBrand);
// app.put("/brands/:brandId", brandController.updateBrand);
app.put("/brands/:brandId", brandController.updateById);


//state
app.post("/states", stateController.addState);
app.get("/states", stateController.getAllStates);
app.get("/states/:stateId", stateController.getById);
app.delete("/states/:stateId", stateController.deleteStates);
// app.put("/states/:stateId", stateController.UpdateState);
app.put("/states/:stateId", stateController.updateById);


//city
app.post("/cities", cityController.addCity);
app.get("/cities", cityController.getAllcities);
app.get("/cities/:cityId",cityController.getById);
app.delete("/cities/:cityId", cityController.deleteCity);
app.put("/cities/:cityId", cityController.updateCity);
app.get("/citiesbystateid/:stateId", cityController.getByStateId);
// app.put("/citiesUpdate/cityId",cityController.updateById)

//vendorDetail
app.post("/vendor", vendorController.addvendor);
app.get("/vendor", vendorController.getAllvendor);
app.get("/vendor/:vendorId", vendorController.getById);
app.delete(
  "/vendor/:vendorId",
  vendorController.deletevendor
);
// app.put("/vendor/:vendorId", vendorController.updatevendor);
app.put("/vendor/:vendorId", vendorController.updateById);


//Customer Address
app.post("/customeraddresses", custAddressController.addcustAddress);
app.get("/customeraddresses", custAddressController.getAllcusAddresses);
app.delete(
  "/customeraddresses/:custAddressId",
  custAddressController.deletecustAddress);
app.put("/customeraddresses/:custAddressId", custAddressController.updatecustAddress);

//product
app.post("/products", productController.addProduct);
app.get("/products", productController.getAllproducts);
app.get("/products/:productId", productController.getById);
app.get("/productone",productController.getoneproducts)
app.delete("/products/:productId", productController.deleteProduct);
// app.put("/products/:productId", productController.updateProduct);
app.put("/products/:productId", productController.updateById);


//vendor_Product
app.post("/vendorproducts", vendorProductController.addvendorProduct);
app.get("/vendorproducts", vendorProductController.getAllvendorProducts);
app.delete(
  "/vendorproducts/:vendorproductId",
  vendorProductController.deleteVendorProduct
);
app.put("/vendorproducts/:vendorproductId", vendorProductController.updatevendorProduct);

//offer
app.post("/offers", offerController.addOffer);
app.get("/offers", offerController.getAllOffers);
app.delete("/offers/:offerId", offerController.deleteOffer);
app.put("/offers/:offerId", offerController.updateOffer);

//cart
app.post("/carts", cartController.addcart);
app.get("/carts", cartController.getAllcarts);
app.get("/allcarts/:userId",cartController.getAllcartsNew)
app.delete("/carts/:cartId", cartController.deletecart);
app.put("/carts/:cartId", cartController.updatecart);

//status
app.post("/statuses", statusController.addStatus);
app.get("/statuses", statusController.getAllstatus);
app.delete("/statuses/:statusId", statusController.deleteStatus);
app.put("/statuses/:statusId", statusController.updatestatus);

//order
app.post("/orders", orderController.addOrder);
app.get("/orders", orderController.getAllOrders);
app.delete("/orders/:orderId", orderController.deleteOrder);
app.put("/orders/:orderId", orderController.updateOrder);

//order-detail
app.post("/orderdetails", orderDetailController.addorder_detail);
app.get("/orderdetails", orderDetailController.getAllOrder_details);
app.get("/ordersdetailsbyid/:orderId", orderDetailController.getByOrderId);
app.delete(
  "/orderdetails/:order_detailId",
  orderDetailController.deleteOrder_details
);
app.put("/orderdetails/:order_detailId", orderDetailController.updateoeder_details);

//payment
app.post("/payments", paymentController.addpayment);
app.get("/payments", paymentController.getAllpayments);
app.delete("/payments/:paymentId", paymentController.deletepayment);
app.put("/payments/:paymentId", paymentController.updatepayment);

//customization
app.post("/customization", customController.addcustomization);
app.get("/customization", customController.getAllcustomization);
app.delete("/customization/:customId", customController.deletecustomization);
app.put("/customization/:customId", customController.upadatecustomization);

//Product Img
app.post("/productimgs",VProductImgController.addproductimg)
app.get("/productimgs",VProductImgController.getAllProductImg)
app.delete("/productimgs/:productImgId",VProductImgController.deleteProductImg)
app.put("/productimgs/:ProductImgId",VProductImgController.updateproductImg)
// app.get("/login", function(req,res){
//     res.write("login....")
//     res.end()
// })

app.get("/signup", function (req, res) {
  res.write("SignUp....");
  res.end();
});




//server
app.listen(4001, function () {
  console.log("server started on 4001");
});

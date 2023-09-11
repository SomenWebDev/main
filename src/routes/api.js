const express = require("express");
const BrandController = require("../controllers/BrandController");
const CategoryController = require("../controllers/CategoryController");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
const ProfileController = require("../controllers/ProfileController");
const InvoiceController = require("../controllers/InvoiceController");
const AuthVerification = require("../middleware/AuthVerification");
const router = express.Router();
// Brand Category
router.get("/brand-list", BrandController.BrandList);
router.get("/category-list", CategoryController.CategoryList);
// Product Category
router.get("/slider-list", ProductController.SliderList);
router.get("/list-by-category", ProductController.ListByCategory);
router.get("/list-by-similar", ProductController.ListBySimilar);
router.get("/list-by-brand", ProductController.ListByBrand);
router.get("/list-by-keyword", ProductController.ListByKeyword);
router.get("/list-review", ProductController.ListReview);
router.get("/product-details", ProductController.ProductDetail);
router.get("/list-by-remark", ProductController.ListByRemark);
router.get("/wish-list", ProductController.WishList);
router.get("/create-wish-list", ProductController.CreateWishList);
router.get("/remove-wish-list", ProductController.RemoveWishList);
router.get("/cart-list", ProductController.CartList);
router.get("/create-cart-list", ProductController.CreateCartList);
router.get("/remove-cart-list", ProductController.RemoveCartList);
// User
router.get("/user-login/:email", UserController.UserLogin);
router.get("/verify-login/:email/:otp", UserController.VerifyLogin);
router.get("/logout", UserController.LogOut);
// Profile
router.get(
  "/create-profile",
  AuthVerification,
  ProfileController.CreateProfile
);
router.get("/read-profile", AuthVerification, ProfileController.ReadProfile);
router.get(
  "/update-profile",
  AuthVerification,
  ProfileController.UpdateProfile
);
// Invoice
router.get(
  "/invoice-create",
  AuthVerification,
  InvoiceController.InvoiceCreate
);
router.get("/invoice-list", AuthVerification, InvoiceController.InvoiceList);
router.get(
  "/invoice-product-list",
  AuthVerification,
  InvoiceController.InvoiceProductList
);
router.get("/payment-success", InvoiceController.PaymentSuccess);
router.get("/payment-fail", InvoiceController.PaymentFail);
router.get("/payment-cancel", InvoiceController.PaymentCancel);
router.get("/payment-ipn", InvoiceController.PaymentIPN);

module.exports = router;

exports.SliderList = async (req, res) => {
  return res.status(200).json({ success: true, message: "Slide List" });
};
exports.ListByCategory = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "LIstByCategory List",
  });
};
exports.ListBySimilar = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "ListBySimilar List",
  });
};

exports.ListByBrand = async (req, res) => {
  return res.status(200).json({ success: true, message: "ListByBrand list" });
};
exports.ListByKeyword = async (req, res) => {
  return res.status(200).json({ status: true, message: "ListByKeyword" });
};
exports.ListReview = async (req, res) => {
  return res.status(200).json({ status: true, message: ListReview });
};
exports.ProductDetail = async (req, res) => {
  return res.status(200).json({ status: true, message: "ProductDetail" });
};
exports.ListByRemark = async (req, res) => {
  return res.status(200).json({ status: true, message: "ListByRemark" });
};
exports.WishList = async (req, res) => {
  return res.status(200).json({ status: true, message: "WishList" });
};
exports.CreateWishList = async (req, res) => {
  return res.status(200).json({ status: true, message: "WishList" });
};
exports.RemoveWishList = async (req, res) => {
  return res.status(200).json({ status: true, message: "WishList" });
};
exports.CartList = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "CartList",
  });
};
exports.CreateCartList = async (req, res) => {
  return res.status(200).json({ success: true, message: "CartList" });
};
exports.RemoveCartList = async (req, res) => {
  return res.status(200).json({ success: true, message: "CartList" });
};

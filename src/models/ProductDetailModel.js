const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    img1: { type: String, required: true },
    img2: { type: String },
    img2: { type: String },
    img2: { type: String },
    des: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },

    discount: { type: Boolean, trim: true, default: false },
  },
  { timestamps: true, versionKey: false }
);

const ProductDetailModel = mongoose.model("productDetail", DataSchema);
module.exports = ProductDetailModel;

const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    categoryName: { type: String, trim: true, required: true, unique: true },
    categoryImg: { type: String, trim: true, required: true },
  },
  { timestamps: true, versionKey: false }
);
const CategoryModel = mongoose.model("catagories", DataSchema);
module.exports = CategoryModel;

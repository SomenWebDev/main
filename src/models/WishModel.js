const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true, versionKey: false }
);

const WishModel = mongoose.model("wishes", DataSchema);
module.exports = WishModel;

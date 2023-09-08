const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    invoiceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    qty: { type: string, required: true },
    price: { type: string, required: true },
    color: { type: string, required: true },
    size: { type: string, required: true },
  },
  { timestamps: true, versionKey: false }
);

const InvoiceProductModel = mongoose.model("invoiceProducts", DataSchema);
module.exports = InvoiceProductModel;

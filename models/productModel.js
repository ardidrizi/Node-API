const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Plase enter a name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter a quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please enter a price"],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

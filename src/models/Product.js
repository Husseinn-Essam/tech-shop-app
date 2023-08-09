const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  stock: {
    type: Number,
    min: 0,
  },
  categories: [String],
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
productSchema.set("toJSON", {
  transform: (document, obj) => {
    obj.productId = obj._id.toString();
    delete obj._id;
    delete obj.__v;
  },
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;

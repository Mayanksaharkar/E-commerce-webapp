const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    index: { unique: true },
  },
  link: {
    type: String,
    required: true,
    index: { unique: true },
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: null,
  },
  desc_short: {
    type: Array,
    default: null,
  },
  cover_img: {
    type: String,
    required: true,
  },
  img_list: {
    type: Array,
    default: null,
  },
  desc_long: {
    type: Object,
    default: null,
  },
  specification: {
    type: Object,
    default: null,
  },
});
const Products = mongoose.model("Products", ProductSchema);
module.exports.Products = Products;
const FeaturedProd = mongoose.model("FeaturedProd", ProductSchema);
module.exports.FeaturedProd = FeaturedProd;

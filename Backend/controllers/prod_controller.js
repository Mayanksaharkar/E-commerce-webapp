const Product = require("../models/Product");
const mongoose = require("mongoose");
exports.get_all_products = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length !== 0) {
      return res.status(200).json(products);
    }
    return res.status(404).json({ message: "No Product to Show" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Somthing Went Wrong" });
  }
};

exports.add_product = async (req, res) => {
  try {
    const {
      category,
      brand,
      title,
      link,
      cover_img,
      img_list,
      desc_short,
      desc_long,
      rating,
      price,
      specification,
    } = req.body;

    let prod = await Product.findOne({ link: link });
    if (!prod) {
      prod = await new Product({
        category,
        brand,
        title,
        link,
        cover_img,
        img_list,
        desc_short,
        desc_long,
        rating,
        price,
        specification,
      });
      prod = await prod.save();
      if (!prod) {
        return res.status(404).json({ message: "Product not Created" });
      }
      return res.status(200).json({ message: "Product Added" });
    }
    return res.status(401).json({ message: "Product Already Exists" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

exports.get_prod_by_id = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }
    const prod = await Product.findById(req.params.id);
    if (prod) {
      return res.status(200).json(prod);
    }
    return res.status(404).json({ message: "Product Not Found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing Went Wrong" });
  }
};

exports.update_prod_by_id = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }
    let prod = await Product.findById(req.params.id);
    if (!prod) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    const {
      category,
      brand,
      title,
      link,
      cover_img,
      img_list,
      desc_short,
      desc_long,
      rating,
      price,
      specification,
    } = req.body;
    if (brand) prod.brand = brand;
    if (category) prod.category = category;
    if (title) prod.title = title;
    if (cover_img) prod.cover_img = cover_img;
    if (link) prod.link = link;
    if (img_list) prod.img_list = img_list;
    if (desc_short) prod.desc_short = desc_short;
    if (desc_long) prod.desc_long = desc_long;
    if (specification) prod.specification = specification;
    if (rating) prod.rating = rating;
    if (price) prod.price = price;

    prod = await prod.save();
    return res.status(200).json({ message: "Product Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

exports.delete_prod_by_id = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    return res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

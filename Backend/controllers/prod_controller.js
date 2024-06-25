const { Products, FeaturedProd } = require("../models/Products");
const mongoose = require("mongoose");
exports.get_all_products = async (req, res) => {
  try {
    const products = await Products.find({});
    if (products.length !== 0) {
      return res.status(200).json(products);
    }
    return res.status(404).json({ message: "No Products to Show" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Somthing Went Wrong" });
  }
};
exports.get_featured_products = async (req, res) => {
  try {
    const products = await FeaturedProd.find({});
    if (products.length !== 0) {
      return res.status(200).json(products);
    }
    return res.status(404).json({ message: "No Products to Show" });
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

    let prod = await Products.findOne({ link: link });
    if (!prod) {
      prod = await new Products({
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
        return res.status(404).json({ message: "Products not Created" });
      }
      return res.status(200).json({ message: "Products Added" });
    }
    return res.status(401).json({ message: "Products Already Exists" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

exports.get_prods_by_category = async (req, res) => {
  try {
    const { category } = req.params.category;
    let products = await Products.find({ category });

    if (products.length !== 0) {
      return res.status(200).json(products);
    }
    return res.status(400).json({ message: "Not Found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.get_categories = async (req, res) => {
  try {
    const categories = await Products.aggregate([
      {
        $group: {
          _id: "$category",
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);

    return res.json(categories.map((categories) => categories._id));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Somthing went Wrong" });
  }
};

exports.get_prod_by_id = async (req, res) => {
  try {
    const prod = await Products.findById(req.params.id);
    if (prod) {
      return res.status(200).json(prod);
    }
    return res.status(404).json({ message: "Products Not Found" });
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
    let prod = await Products.findById(req.params.id);
    if (!prod) {
      return res.status(404).json({ message: "Products Not Found" });
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
    return res.status(200).json({ message: "Products Updated" });
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

    const deletedProduct = await Products.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Products Not Found" });
    }

    return res.status(200).json({ message: "Products Deleted Successfully" });
  } catch (error) {
    console.error("Error deleting Products:", error);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

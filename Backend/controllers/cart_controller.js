const Cart = require("../models/Cart");

const Products = require("../models/Products");
exports.add_to_cart = async (req, res) => {
  const { productId, qty } = req.body;

  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product Not Found" });
  }

  const userCart = await Cart.findOne({ user: req.user._id });

  if (userCart) {
    const itemIndex = userCart.cartItems.findIndex(
      (p) => p.product.toString() === productId
    );

    if (itemIndex > -1) {
      userCart.cartItems[itemIndex].qty = qty;
    } else {
      userCart.cartItems.push({ product: productId, qty });
    }

    await userCart.save();
    return res.status(200).json(userCart);
  } else {
    const newCart = await Cart.create({
      user: req.user._id,
      cartItems: [{ product: productId, qty }],
    });

    return res.status(201).json(newCart);
  }
};

exports.get_cart_items = async (req, res) => {
  const userCart = await Cart.findOne({ user: req.user._id }).populate(
    "cartItems.product",
    "title price cover_img"
  );

  if (!userCart) {
    return res.status(404).json({ message: "Cart is Empty" });
  }

  return res.status(200).json(userCart);
};

exports.update_cart_item = async (req, res) => {
  try {
    const { qty } = req.body;
    const userCart = await Cart.findOne({ user: req.user._id });

    if (userCart) {
      const itemIndex = userCart.cartItems.findIndex(
        (p) => p._id.toString() === req.params.id
      );

      if (itemIndex > -1) {
        userCart.cartItems[itemIndex].qty = qty;
        await userCart.save();
        res.status(200).json(userCart);
      } else {
        return res.status(404).json({ message: "Item not found in cart" });
      }
    } else {
      return res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Somthing Went Wrong" });
  }
};

exports.remove_cart_item = async (req, res) => {
  try {
    const userCart = await Cart.findOne({ user: req.user._id });

    if (userCart) {
      userCart.cartItems = userCart.cartItems.filter(
        (p) => p._id.toString() !== req.params.id
      );
      await userCart.save();
      return res.status(200).json(userCart);
    } else {
      return res.status(404).json({ message: "Cart Not Found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Somthing Went Wrong" });
  }
};

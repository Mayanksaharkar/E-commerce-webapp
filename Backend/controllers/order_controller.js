const Order = require("../models/Order.js");

exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.params.uid;
    const orders = await Order.find({ customer_id: userId }).sort({ _id: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

exports.addOrder = async (req, res) => {
  try {
    const { products, customer_id, address, total_price, transaction_id, shipping_cost } = req.body;
    console.error("Received order data:", req.body);
    const order = new Order({
      products, 
      customer_id,
      total_price,
      address,
      transaction_id,
      payment_status: "Paid",
      shipping_cost:shipping_cost ,
    });
    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Failed to place order" });
  }
};
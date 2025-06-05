import Razorpay from "razorpay";
import Payments from "../models/Payments.js";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

export const AddPaymentData = async (req, res) => {
  const { payment_id, payment_status, user , amount} = req.body;
  try {
    const payment = new Payments({
      payment_id: payment_id,
      payment_status: payment_status,
      amount: amount,
      user: user,
    });
    await payment.save();
    res.status(201).json({ message: "Payment data added successfully" });
  } catch (error) {
    console.error("Error adding payment data:", error);
    res.status(500).json({ error: "Failed to add payment data" });
  }
};



export const createOrder = async (req, res) => {
 
  const { amount  } = req.body;
  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
  };
  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

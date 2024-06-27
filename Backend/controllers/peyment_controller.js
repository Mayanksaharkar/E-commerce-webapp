const { PaymentGateway } = require("@cashfreepayments/cashfree-sdk");
const pg = new PaymentGateway({
  env: "TEST",

  appId: process.env.CLIENT_ID,

  secretKey: process.env.CLIENT_SECRET,
});
exports.checkout = async (req, res) => {
  try {
    pg.orders

      .createOrders({
        orderId: req.body.orderId,

        orderAmount: req.body.orderAmt,

        orderCurrency: "INR",

        orderNote: req.body.productName,

        customerName: req.body.uname,

        customerPhone: req.body.uphone,

        customerEmail: req.body.uemail,

        returnUrl: "http://localhost:5173/",
      })
      .then((data) => {
        console.log(data);
        res.json({ message: "orderCreate", orderData: data });
      });
  } catch (error) {
    console.error(error);
  }
};

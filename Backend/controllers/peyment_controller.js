const { PaymentGateway } = require("@cashfreepayments/cashfree-sdk");
const pg = new PaymentGateway({
  env: "TEST",

  appId: process.env.CLIENT_ID,

  secretKey: process.env.CLIENT_SECRET,
});
exports.checkout = async (req, res) => {
  const { customerName, orderId, orderAmount, customerEmail, customerPhone } =
    req.body;

  console.log(req.body);

  try {
    pg.orders

      .createOrders({
        orderId: orderId,

        orderAmount: orderAmount,

        orderCurrency: "INR",

        orderNote: "dwada",

        customerName: customerName,

        customerPhone: "8421056849",

        customerEmail: "mayank@gmail.com",

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

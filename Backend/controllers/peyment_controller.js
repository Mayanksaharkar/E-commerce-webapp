const Instamojo = require("instamojo-payment-nodejs");
const Payments = require("../models/Payments");

Instamojo.isSandboxMode(true); // For testing

Instamojo.setKeys(process.env.API_KEY, process.env.AUTH_KEY);

exports.checkout = async (req, res) => {
  try {
    const { amt, email, phone, name } = req.body;
    const options = {
      purpose: "Shopping",
      amount: amt,
      currency: "INR",
      buyer_name: name,
      email: email,
      phone: phone,
      send_email: false,
      send_sms: false,
      allow_repeated_payments: false,
      webhook: "",
      redirect_url: "https://e-commerce-webapp-zook.vercel.app/",
    };

    const paymentData = Instamojo.PaymentData(options);

    const response = await Instamojo.createNewPaymentRequest(paymentData);
    // console.log(await response.payment_request.longurl);

    return await res.json(response.payment_request.longurl);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Something Went Wrong" });
  }
};

exports.AddPaymentData = async (req, res) => {
  try {
    const { payment_id, payment_status, uid } = req.body;

    let payment = await Payments.findOne({ payment_id });

    if (!payment) {
      payment = new Payments({ payment_id, payment_status, user: uid });
      await payment.save();
      return res.status(200).json({ message: "Data Added" });
    } else {
      return res.status(409).json({ message: "Payment Already Entered" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

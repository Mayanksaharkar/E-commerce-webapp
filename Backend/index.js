require("dotenv").config();
const connect_to_mongo = require("./dbConnection");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

const cors = require("cors");
app.use(cors());

app.use(
  cors({
    origin: "https://e-commerce-webapp-gamma.vercel.app/",
  })
);

connect_to_mongo();

app.use("/auth", require("./routes/auth"));
app.use("/product", require("./routes/product"));
app.use("/cart", require("./routes/cart"));
app.use("/payment", require("./routes/payment"));
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT, () => {
  console.log("app is listening at ", process.env.PORT);
});

require("dotenv").config();
const connect_to_mongo = require("./dbConnection");
const express = require("express");
const app = express();
app.use(express.json());
connect_to_mongo();
app.use("/auth", require("./routes/auth"));
app.use("/product", require("./routes/product"));
app.use("/cart", require("./routes/cart"));
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(process.env.PORT, () => {
  console.log("app is listening at ", process.env.PORT);
});

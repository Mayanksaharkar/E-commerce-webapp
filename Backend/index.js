require("dotenv").config();
const connect_to_mongo = require("./dbConnection");
const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
app.use(express.json());

const corsOrigin = {
  origin: [process.env.CORS_ORIGIN.replace(/\/$/, ""), "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

app.use(cors(corsOrigin));
app.options('*', cors(corsOrigin));


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

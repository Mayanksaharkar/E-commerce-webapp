require("dotenv").config();
const connect_to_mongo = require("./dbConnection");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());



const allowedOrigins = [
  'http://localhost:5173',
  'https://e-commerce-webapp-zook.vercel.app/'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

app.use(cors(corsOptions));


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

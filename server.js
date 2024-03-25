const express = require("express");
const cors = require("cors");
const morgon = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

dotenv.config();

connectDb();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgon("dev"));

app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/restuarant", require("./routes/restaurantRoutes"));
app.use("/api/v1/food", require("./routes/foodRoutes"));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Server</h1>");
});

const PORT = process.env.PORT || 8000;
800;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
});

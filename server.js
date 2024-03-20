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

app.use("/api/v1/test", require("./routes/textRoutes"));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Server</h1>");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
});

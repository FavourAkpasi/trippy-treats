const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const colors = require("colors");
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middlewares/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/trippy-treats", userRoutes, productRoutes);
app.use(errorHandler);

connectDB();

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

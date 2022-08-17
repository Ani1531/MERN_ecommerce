const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("../dbConnection");

const UserRoutes = require("./routes/User");
const AdminRoutes = require("./routes/admin/admin");
const CategoryRoutes = require("./routes/Category");
const ProductRoute = require("./routes/Product");

env.config();

app.use(express.json());

app.use("/api", UserRoutes);
app.use("/api", AdminRoutes);
app.use("/api", CategoryRoutes);
app.use("/api", ProductRoute);

app.listen(process.env.PORT, () => {
  console.log("server is running at " + process.env.PORT);
});

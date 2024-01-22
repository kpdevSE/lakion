// Import dependancies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// config dotenv
require("dotenv").config();

// setting a port
const port = process.env.SERVER_PORT || 3000;
 
// Import Routes files
const leadRoutes = require("./route/leadRoute");
const taskRoutes = require("./route/taskRoute");
const myTaskRoutes = require("./route/myTaskRoute");

// Create a App using express
const app = express();

// bodyparser congiguration
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

// connect to MongoDB database

mongoose
  .connect("mongodb+srv://amanmanthira32326:waUxDifC3vrA2bi7@cluster0.xpdjn1o.mongodb.net/")
  .then(() => {
    app.listen(port, () => {
      console.log(
        `database connected successfully and server is runnig on port ${port}`
      );
    });
  })
  .catch(() => {
    console.log("Data base is not connected successfully");
  });

app.get("/", (req, res) => {
  res.json({
    message: "HEllO WORLD",
  });
});

// use our routes using app
app.use("/api/v1/leads", leadRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/mytasks", myTaskRoutes);

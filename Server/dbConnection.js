const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("NODEJS TO MongoDB Connection ESTABLISH.....");
    else
      console.log(
        "Error in DB connection : " + err
      );
  }
);

module.exports = mongoose;


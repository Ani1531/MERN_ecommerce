const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://mernEcmrDatabase:<Aniket@1531>@mernecmrdatabase.6k4dzrk.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("NODEJS TO MongoDB Connection ESTABLISH.....");
    else
      console.log(
        "Error in DB connection : " + JSON.stringify(err, undefined, 2)
      );
  }
);

module.exports = mongoose;

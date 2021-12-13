const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnefiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));

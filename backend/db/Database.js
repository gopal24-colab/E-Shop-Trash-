const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb connected with server : ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`mongodb connection error : ${err}`);
    });
};

module.exports = connectDatabase;

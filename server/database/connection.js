const mongoose = require("mongoose");
require("dotenv").config()
const connectdb = async () => {
  try {
    //mongodb connection string
    const conn = await mongoose.connect(process.env.database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongoDB connected:${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectdb;

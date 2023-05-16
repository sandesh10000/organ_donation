const mongoose = require("mongoose");
var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  organ: {
    type: String,
    required: true,
  },
});

const requestschema = mongoose.model("requestdata", schema);
module.exports = requestschema;

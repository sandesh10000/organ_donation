const mongoose = require("mongoose");
var schema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  organ: {
    type: Array,
    required: true,
  },
});

const organschema = mongoose.model("organdata", schema);
module.exports = organschema;

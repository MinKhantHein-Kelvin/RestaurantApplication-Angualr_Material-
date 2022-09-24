const mongoose = require("mongoose")

const restaurantSchemas = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  address: String,
  types: String,
});

module.exports = mongoose.model("Restaurant", restaurantSchemas);

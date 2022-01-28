const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  username: String,
  image: String,
  details: String
});

module.exports = mongoose.model("Job", jobSchema);

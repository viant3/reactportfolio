const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: String,
    name: String,
    email: String,
    message: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);

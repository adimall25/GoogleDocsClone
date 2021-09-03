const mongoose = require("mongoose")

const documentSchema = new mongoose.Schema({
  _id: String,
  data: Object,
})

const Document = new mongoose.model("document", documentSchema);
module.exports = Document
const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true }
});

module.exports = mongoose.model('Example', exampleSchema);

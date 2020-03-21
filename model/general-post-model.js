const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
// general post schema 
const generalPostSchema = mongoose.model(
  "generalPost",
  new Schema({
    fullName: String,
    context: String,
    contact: String,
    phone: Number
  })
);

module.exports = generalPostSchema; 
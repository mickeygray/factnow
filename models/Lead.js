const mongoose = require("mongoose");
const { Schema } = mongoose;

const leadSchema = new Schema({
 amount: String,
 type: String,
 time: String,
 name: String,
 phone: String,
 email: String,
 problem: String,
 callbackDate: String,
 callbackTime: String,
 method: String,
 comments: String,
 address: String,
 city: String,
 state: String,
 zip: String,
});

module.exports = mongoose.model("leads", leadSchema);

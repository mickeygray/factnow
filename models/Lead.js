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
});

module.exports = mongoose.model("leads", leadSchema);

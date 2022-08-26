const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

router.post("/", async (req, res) => {
 const {
  name,
  phone,
  email,
  problem,
  amount,
  time,
  type,
  address,
  city,
  state,
  zip,

  callbackDate,
  callbackTime,
  method,
  comments,
 } = req.body;
 const newLead = new Lead({
  name,
  phone,
  email,
  problem,
  amount,
  time,
  type,
  address,
  city,
  state,
  zip,

  callbackDate,
  callbackTime,
  method,
  comments,
 });

 const lead = await newLead.save();

 res.json(lead);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

router.post("/", async (req, res) => {
 const { name, phone, email, problem, amount, time, type } = req.body;
 const newLead = new Lead({
  name,
  phone,
  email,
  problem,
  amount,
  time,
  type,
 });

 const lead = await newLead.save();

 res.json(lead);
});

module.exports = router;

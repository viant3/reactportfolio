const express = require("express");
const router = express.Router();
const Data = require("../models/data");


router.get("/", (req, res) => {
    res.json({ message: "Welcome to Victor Politano's Web Portfolio" });
  });
  
  router.get("/getData", (req, res) => {
    Data.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });
  
  router.post("/updateData", (req, res) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });
  
  router.delete("/deleteData", (req, res) => {
    const { id } = req.body;
    Data.findByIdAndRemove(id, err => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  });
  
  router.post("/putData", (req, res) => {
    let data = new Data();
  
    const { id, name, email, message } = req.body;
  
    if ((!id && id !== 0) || !name || !email || !message ) {
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }
    data.name = name;
    data.email = email;
    data.message = message;
    data.id = id;
    data.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

module.exports = router;
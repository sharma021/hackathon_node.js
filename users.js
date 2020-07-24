const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");

router.post("/signup", (req,res,next) => {
    const user = new user({
        _id: new mongoose.Types.ObjectId(),
        Index_No: req.body.Index_No,
        Name: req.body.Name,
        Email: req.body.Email,
        Contact: req.body.Contact,
        date_created: req.body.date_created,
        list: req.body.list,
        Budget: req.body.Budget
    });
});
module.exports = router;

const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../middleware/multer");
const User = require("../models/User");
const ErrorHandler = require("../utils/ErrorHandler");

router
  .route("/create-user")
  .get((req, res) => {
    res.json({ msg: "some wrong! Please contact with helpline email" });
  })
  .post(upload.single("file"), async (req, res, next) => {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ email });

    if (userEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const user = {
      name,
      email,
      password,
      avatar: fileUrl,
    };

    console.log(user);
  });

module.exports = router;

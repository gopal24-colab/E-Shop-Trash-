const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Data.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split(".")[0];
    const fileExtension = file.mimetype.split("/")[1];
    cb(null, `${filename}-${uniqueSuffix}.${fileExtension}`);
  },
});

exports.upload = multer({ storage });

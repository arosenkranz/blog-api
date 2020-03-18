const cloudinary = require('cloudinary').v2;
const formidable = require('formidable');

require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const uploadImage = (req, res, next) => {
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    // cloudinary.uploader.upload(, (error, result) => {
    //   console.log(result, error);
    // });

    res.json({ fields, files });
  });
};

module.exports = uploadImage;

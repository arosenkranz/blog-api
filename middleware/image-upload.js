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
      console.log(err);
      res.status(400).json(err);
      return;
    }
    console.log(files.image);

    console.log(fields);

    cloudinary.uploader.upload(files.image.path, (error, result) => {
      console.log(result, error);
      if (error) {
        console.log(err);
        res.status(500).json(err);
        return;
      }

      req.body = { ...fields, image_url: result.secure_url };

      console.log(result);

      next();
    });
  });
};

module.exports = uploadImage;

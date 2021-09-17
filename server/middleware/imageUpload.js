const multer = require('multer')
const multerS3 = require('multer-s3')
const s3Connect = require("../utils/aws")

const acceptedFileTypes = ["image/jpeg", "image/png"]

const fileFilter = (req, file, cb) => {
  // cb is for multer and its a callback function that gets called returned when multer finishes.
  // per convos I found online, its better practice to pass null when everything is cool, and throw an error when something doesn't "match"
  // what I want.
  if (acceptedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  }
  else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
}


const uploadFile = (keyName) => multer({
  fileFilter,
  limits: {
    fileSize: 1 * 1024 * 1024
  },
  storage: multerS3({
    acl: 'public-read',
    s3: s3Connect(),
    bucket: process.env.BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "TESTING_METADATA" });
    },
    key: function (req, file, cb) {
      // below steps the name for each file
      cb(null, `${req.user.id}/${keyName}.${file.mimetype.split("/")[1]}`);
    },
  }),
});


exports.singleUpload = async (req, res, next) => {

  await uploadFile("avatar").single("image")(req, res, function (err) {
    if (err) {
      return res.status(400).json({
        success: false,
        errors: {
          title: "Image Upload Error",
          detail: err.message
        },
      });
    }

    next()


  })

}
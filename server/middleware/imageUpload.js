const multer = require("multer");
const multerS3 = require("multer-s3");
const { s3Connect } = require("../utils/aws");
const Profile = require("../models/Profile");

const acceptedFileTypes = ["image/jpeg", "image/png"];

const fileFilter = (req, file, cb) => {
  // cb is for multer and its a callback function that gets called returned when multer finishes.
  // per convos I found online, its better practice to pass null when everything is cool, and throw an error when something doesn't "match"
  // what I want.
  if (acceptedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

const uploadFile = (keyName, includeFileName = false) => {
  return multer({
    fileFilter,
    limits: {
      fileSize: 1 * 1024 * 1024,
    },
    storage: multerS3({
      acl: "public-read",
      s3: s3Connect(),
      bucket: process.env.BUCKET_NAME,
      metadata: function (req, file, cb) {
        cb(null, { fieldName: "TESTING_METADATA" });
      },
      key: function (req, file, cb) {
        const name = includeFileName
          ? "-" + file.originalname
          : "." + file.mimetype.split("/")[1];
        cb(null, `${req.user.id}/${keyName}${name}`);
      },
    }),
  });
};

exports.singleUpload = async (req, res, next) => {
  await uploadFile("avatar").single("image")(req, res, function (err) {
    if (err) {
      return res.status(400).json({
        success: false,
        errors: {
          title: "Image Upload Error",
          detail: err.message,
        },
      });
    }
    next();
  });
};

exports.multiUpload = async (req, res, next) => {
  const profile = await Profile.findByUserIdPopulated(req.user._id);
  if (!profile) {
    return res.status(400).json({
      success: false,
      errors: {
        title: "Image Upload Error",
        detail: "Profile was not found. Please make sure you have created one.",
      },
    });
  }
  const gallerySize = profile.gallery.length;
  const maxUploadLength = 5;
  const permittedUploadLength =
    maxUploadLength - gallerySize < 1 ? 0 : maxUploadLength - gallerySize;

  if (!permittedUploadLength) {
    res.status(413).json({
      success: false,
      errors: {
        title: "Image Upload Error",
        detail:
          "Gallery is currently full. Please delete existing images before continuing to upload",
      },
    });
  } else {
    await uploadFile("gallery", true).array("image", permittedUploadLength)(
      req,
      res,
      function (err) {
        if (err) {
          return res.status(400).json({
            success: false,
            errors: {
              title: "Image Upload Error",
              detail: err.message,
            },
          });
        }
        req.profile = profile;
        next();
      }
    );
  }
};

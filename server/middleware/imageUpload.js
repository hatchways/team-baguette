const multer = require('multer')
const multerS3 = require('multer-s3')
// const s3Connect = require("../utils/aws")
const aws = require("aws-sdk");





// aws.config.setPromisesDependency();
aws.config.update({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
  region: process.env.REGION
});

const s3 = new aws.S3();




const acceptedFileTypes = ["image/jpeg", "image/png"]

const fileFilter = (req, file, cb) => {
  // cb is for multer and its a callback function that gets called returned when multer finishes.
  // per convos I found online, its better practice to pass null when everything is cool, and throw an error when something doesn't "match"
  // what I want.
  // if (acceptedFileTypes.includes(file.mimetype)) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  }
  else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
}


const uploadFile = multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: process.env.BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "TESTING_METADATA" });
    },
    key: function (req, file, cb) {
      cb(null, "avatar.png");
    },
  }),
});


exports.singleUpload = async (req, res, next) => {
  console.log("this happened")



    await uploadFile.single("image")(req,res, function (err) {
      console.log("this is inside the uploadFile")
      if (err) {
        console.log("this is inside the error file here",err)
        return res.json({
          success: false,
          errors: {
            title: "Image Upload Error",
            detail: err.message,
            error: err,
          },
        });
      }
      else{
        
        req.avatarURL = req.file.location
        next()
      }

    })
 
}
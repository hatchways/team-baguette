const multer = require('multer')
const multerS3 = require('multer-s3')
const s3Connect = require("../utils/aws")
const fs = require('fs')



const acceptedFileTypes = ["image/jpeg", "image/png"]

const fileFilter = (req, file, cb) => {
  // cb is for multer and its a callback function that gets called returned when multer finishes.
  // per convos I found online, its better practice to pass null when everything is cool, and throw an error when something doesn't "match"
  // what I want.
  if (acceptedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  }
  else {
    cb(new Error("Invalid file type"), false)
  }
}


const uploadFile = (keyName) => multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3:  s3Connect(),
    bucket: process.env.BUCKET_NAME,
    key: (req,file,cb)=> cb(null,keyName)
  }),
  onError: ()=> console.log("error with multer")
});


exports.singleUpload = async (req, res, next) => {
  console.log("singleUpload is being called")

  try{
    const s3 = s3Connect()

    // await multer({ dest: 'temp/', limits: { fieldSize: 100 * 1024 * 1024 } }).single(
    //   'avatar'
    // )

    // const params = {
    //   ACL: 'public-read',
    //   Bucket: process.env.BUCKET_NAME,
    //   Body: fs.createReadStream(req.file.path),
    //   Key: `userAvatar/${req.file.originalname}`
    // };

    // s3.upload(params, (err, data) => {
    //   if (err) {
    //     console.log('Error occured while trying to upload to S3 bucket', err);
    //   }

    //   if (data) {
    //     fs.unlinkSync(req.file.path); // Empty temp folder
    //     const locationUrl = data.Location;
    //     console.log("this is the location url", locationUrl)
    //     // let newUser = new Users({ ...req.body, avatar: locationUrl });
    //     // newUser
    //     //   .save()
    //     //   .then(user => {
    //     //     res.json({ message: 'User created successfully', user });
    //     //   })
    //     //   .catch(err => {
    //     //     console.log('Error occured while trying to save to DB');
    //     //   });
    //   }
    // });



    // const upload = multer({
    //   //   // fileFilter,
    //     storage: multerS3({
    //       acl: "public-read",
    //       s3: s3,
    //       bucket: process.env.BUCKET_NAME,
    //       metadata: function (req, file, cb) {
    //         cb(null, { fieldName: "TESTING_METADATA" });
    //       },
    //       key: function (req, file, cb) {
    //         cb(null, Date.now().toString());
    //       }
    //     })
    //   })

    // let upload = multer({
    //   storage: multerS3({
    //     s3: s3,
    //     bucket: "team-baguette-loving-sitter",
    //     metadata: function (req, file, cb) {
    //       cb(null, {fieldName: file.fieldname});
    //     },
    //     key: function (req, file, cb) {
    //       cb(null, Date.now().toString())
    //     }
    //   })
    // })



    next();
  }
  catch(err){
    console.log("whoopsie", err)
    res.status(400).send("we have gotten an error")
  }

  // const s3= s3Connect()

  // console.log("this is after")

  // const upload = multer({
  //   // fileFilter,
  //   storage: multerS3({
  //     acl: "public-read",
  //     s3: s3,
  //     bucket: process.env.BUCKET_NAME,
  //     metadata: function (req, file, cb) {
  //       cb(null, { fieldName: "TESTING_METADATA" });
  //     },
  //     key: function (req, file, cb) {
  //       cb(null, Date.now().toString());
  //     }
  //   })
  //   ,
  //     onError: ()=> console.log("some error happened with multer"),
  // });

  // upload.single("image")
// next()
}



//   try {
//     console.log(process.env.BUCKET_NAME)
//     uploadFile("avatar/" + req.user.id).single("image")
//     console.log("finished doing uploadFIle")
//     next()
//   }
//   catch (err) {
//     res.status(400).send("there is an error")
//   }
// }

// exports.multipleUpload = (req, res, next) => {
//   try {
    
//     uploadFile("avatar/" + req.user._id).array("gallery", 5)
//     next()
//   }
//   catch (err) {
//     res.status(400).send(err)
//   }
// }



// export default s3Upload
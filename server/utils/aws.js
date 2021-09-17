const { LexModelBuildingService } = require("aws-sdk");
const aws = require("aws-sdk");



// sets up connection to aws s3 bucket
const s3Connect = () => {
    aws.config.update({
        accessKeyId: process.env.ACCESSKEYID,
        secretAccessKey: process.env.SECRETACCESSKEY,
        region: process.env.REGION
    });
    const s3 = new aws.S3();

    return s3;

}

// a s3 connection is established and a string of key or an array of keys are passed through to delete the file from s3 bucket
const deleteFile =  (keyName) => {
    s3Connect().deleteObject({
        Bucket: process.env.BUCKET_NAME,
        Key: keyName
    },
        (err, data) => {
            console.log("this is the error from deleting", err)
            console.log("This is the data after deleting", data)
        }
    )
}





module.exports = {
    s3Connect,
    deleteFile

}

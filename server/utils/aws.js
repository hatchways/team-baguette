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


module.exports = s3Connect

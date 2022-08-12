import express from 'express';
import aws from 'aws-sdk';
import dotevn from 'dotenv'

dotevn.config();

const router = express.Router();

const ses = new aws.SES({
  region: "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  });

router.post("/email", (req, res) => {
  const {fullName, email, message} = req.body;
  console.log(req.body);
  sesTest("meharsahil207@gmail.com",email,message, fullName)
  .then((val) =>{
    console.log("Got the value", val);
    res.send("Successful")
  }).catch((err) =>{
    res.send('/error' + err);
  })
});

function sesTest(emailTo,emailFrom,message,fullName){
  const params = {
    Destination: {
      ToAddresses : [emailTo]
    },
    Message: {
      Body: {
          Text: {
            Data: "From Contact: " + fullName+ "\n" +  emailFrom + "\n" + message
          }
      },
      Subject: {
        Data: "Name :" + fullName
      }
    },
    Source: "meharsahil207@gmail.com"
  };

  return  ses.sendEmail(params).promise();

}



export default router;

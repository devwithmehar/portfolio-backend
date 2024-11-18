import express from 'express';
import aws from 'aws-sdk';
import dotevn from 'dotenv'

dotevn.config();

const router = express.Router();

const ses = new aws.SES({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  });

router.post("/contact", (req, res) => {
  const {name, email, subject,  message} = req.body;
  
  sendContactEmail("meharsahil207@gmail.com", name, email, subject, message)
  .then((val) =>{
    
    res.status(200).json({
      success: true, 
      message: "Message Sent!"
    });
  }).catch((err) =>{
    res.send('/error' + err);
  })
});


const sendContactEmail = async (emailTo, name, emailFrom, subject, message) => {
  let params = {
    Source : process.env.AWS_SENDER,
    Destination: {
      ToAddresses : [emailTo]
    },
    Message: {
      Body: {
        Text: {
          Data : `
New Contact Form Submission:

Name: ${name}
Email: ${emailFrom}
Subject: ${subject}

Message:
${message}

-----------------------------
This email was sent via the contact form.

          `
        }
      },
      Subject: {
        Data: `Contact Form: ${subject} (From ${name})`
      }
    }
    

  };

return ses.sendEmail(params).promise();

}



export default router;

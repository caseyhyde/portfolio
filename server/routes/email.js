const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const config = require('../config/aws-config');
aws.config.update(config);
var ses = new aws.SES({apiVersion: '2010-12-01'});
var mailComposer = require('mailcomposer');
const to = [process.env.TO_EMAIL];
const from = process.env.FROM_EMAIL;


router.post('/', function(req, res) {
  let emailBody = req.body.body;
  let userEmail = req.body.email;
  let message =
    'Someone has reached out to you via your website. \n\nMessage:\n\n"' +
    emailBody + '"\n\n' + "Reply to: " + userEmail;
  ses.sendEmail({
    Source: from,
    Destination: { ToAddresses: to },
    Message: {
      Subject: {
        Data: 'Hey! Awesome website!'
      },
      Body: {
        Text: {
          Data: message,
        }
      }
    }
  },
  function(err, data) {
    if(err) {
      console.log("Error sending message: ", err);
    } else {
      console.log('Email sent:');
      console.log("data: ", data);
      res.sendStatus(200);
    }
  });
});//End post '/' route

router.post('/resume', function(req, res) {
  console.log("post route hit!");
  let email = req.body.email;
  let message = req.body.message;
  let template =
  "<h1>Thanks for requesting a copy of my resume!</h1>" +
  "</br>" +
  "<h2>The sender of this email has included a message: </h2></br>" +
  '<p><i>"' + message + '"</i></p></br>'
  "<h2>I am currently seeking these types of employment:</h2>" +
  "<ul>" +
  "<li>Full Time</li>" +
  "<li>Freelance</li>" +
  "<li>Contract</li>" +
  "</ul>";
  //Define mail options and attachments
  let mailOptions = {
    from: {
      name: 'Casey Hyde',
      address: from
    },
    sender: from,
    to: email,
    subject: "Casey Hyde's Developer Resume",
    html: template,
    attachments: [
      {
        name: 'resume.pdf',
        path: './server/assets/casey_hyde_resume.pdf'
      }
    ]
  };
  //Create mail object
  let mail = mailComposer(mailOptions);
  //Build mail
  mail.build(function(err, message){
    if(err) {
      console.log("Error building email: ", err);
      res.sendStatus(500);
    } else {
      console.log("Email built Successfully, sending to: ", email);
      ses.sendRawEmail({ RawMessage: {Data: message}},
        function(err, data) {
          console.log("sending email");
          if(err) {
            console.log("Error sending email: ", err);
            res.sendStatus(500);
          } else {
            console.log("Successfully sent email: ", data);
            res.sendStatus(200);
          }
        }
      );
    }
  });
});//End '/resume' route



module.exports = router;

const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const config = require('../config/aws-config');
aws.config.update(config);
var ses = new aws.SES({apiVersion: '2010-12-01'});
const to = [process.env.TO_EMAIL];
// const from = process.env.FROM_EMAIL;
const from = "prime.casey.hyde@gmail.com";

router.post('/', function(req, res) {
  console.log("email post route hit");
  console.log("req.body on email: ", req.body);
  res.json({Hello: 'world'});
});

// ses.sendEmail({
//   Source: from,
//   Destination: { ToAddresses: to },
//   Message: {
//     Subject: {
//       Data: 'A Message To You Rudy'
//     },
//     Body: {
//       Text: {
//         Data: 'Stop your messing around',
//       }
//     }
//   }
// },
// function(err, data) {
//   if(err) {
//     console.log("Error sending message: ", err);
//   } else {
//     console.log('Email sent:');
//     console.log("data: ", data);
//   }
// });

module.exports = router;

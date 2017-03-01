const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const config = require('../config/aws-config');
aws.config.update(config);
var ses = new aws.SES({apiVersion: '2010-12-01'});
const to = [process.env.TO_EMAIL];
// const from = process.env.FROM_EMAIL;


router.post('/', function(req, res) {
  var from = req.body.email;
  console.log(from);
  ses.sendEmail({
    Source: from,
    Destination: { ToAddresses: to },
    Message: {
      Subject: {
        Data: 'Hey! Awesome website!'
      },
      Body: {
        Text: {
          Data: req.body.body,
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
});



module.exports = router;

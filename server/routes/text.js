var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var express = require('express');
var router = express.Router();
//require the Twilio module and create a REST client

router.post('/', function(req, res) {
  var messageInfo = req.body;
  client.messages.create({
    to: process.env.PHONE_NUMBER,
    from: process.env.TWILIO_FROM_PHONE,
    body: messageInfo.body + ' from: ' + messageInfo.from + '. Phone: ' + messageInfo.phone 
  }, function(err, message) {
    console.log(message.sid);
    if(err) {
      console.log("Message send error: ", err);
    } else {
      console.log("Message sent successfully: ", message);
      res.sendStatus(200);
    }
  });
});//end route

// client.messages.create({
//     to: "+15558675309",
//     from: "+15017250604",
//     body: "This is the ship that made the Kessel Run in fourteen parsecs?",
// }, function(err, message) {
//     console.log(message.sid);
// });

module.exports = router;

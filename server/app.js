require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var randomApi = require('./routes/random');
var email = require('./routes/email');
var text = require('./routes/text')
const LOCALPORT = 3000;
var portDecision = process.env.PORT || LOCALPORT;

//Serve static files
app.use(express.static('public'));

//Index.html route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

app.use(bodyParser.json());
app.use('/random', randomApi);
app.use('/email', email);
app.use('/text', text);

app.listen(portDecision, function() {
  console.log("Listening on port ", portDecision);
});

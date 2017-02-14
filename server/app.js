const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const randomApi = require('./routes/random');
const LOCALPORT = 3000;
var portDecision = process.env.PORT || LOCALPORT;

//Serve static files
app.use(express.static('public'));

//Index.html route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

app.use('/random', randomApi);

app.listen(portDecision, function() {
  console.log("Listening on port ", portDecision);
});

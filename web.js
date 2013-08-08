var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');

var file = fs.readFileSync('index.html');
var filetext = file.toString();

app.get('/', function(request, response) {
  response.send(filetext);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

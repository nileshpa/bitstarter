var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


app.use('/img', express.static(__dirname + '/img'));

app.get('/', function(request, response) {
  var outString = fs.readFileSync("index.html").toString();
  response.send(outString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

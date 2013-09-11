var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.sendfile('index.html');
});

app.get('/name', function(request, response) {
  response.send('My name is Konstantin!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

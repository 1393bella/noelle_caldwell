var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/static')));
app.use(session({secret: 'alsdfjsdfsdfadkfjdsdldldjljdkf'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  if (!request.session.number) {
    request.session.number = Math.floor(Math.random()*100+1);
  }
  if (!request.session.guess) {
    var guess = "none";
  }
  else if (request.session.guess < request.session.number) {
    var guess = "low";
  }
  else if (request.session.guess > request.session.number) {
    var guess = "high";
  }
  else if (request.session.guess == request.session.number) {
    var guess = "correct";
  }
  response.render('index', {status: guess});
})

app.post('/guess', function(request, response) {
  request.session.guess = request.body.guessValue;
  response.redirect('/');
})

app.post('/reset', function(request, response) {
  request.session.number = Math.floor(Math.random()*100+1);
  request.session.guess = null;
  response.redirect('/');
})

app.listen(8000);

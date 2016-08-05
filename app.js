var  express = require('express'),
     load = require('express-load'),
     app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookieParser('Ntalk'));
app.use(session());
app.use(bodyParser());


load('models')
  .then('controllers')
  .then('routes')
  .into(app);


app.listen(3000, function(){
  console.log('Ntalk no ar');
});

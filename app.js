var  express = require('express'),
     load = require('express-load'),
     routes = require('./routes');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/usarios', routes.user.index);

app.listen(3000, function(){
  console.log('Ntalk no ar');
});

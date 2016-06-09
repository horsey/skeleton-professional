var express     = require('express'), 
    compress    = require('compression'), 
    middleware  = require('./middleware'),
    logger      = require('morgan'), 
    path        = require('path');


app = express(); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// to render static files
app.use('/static',express.static(path.join(__dirname, 'public')));

middleware(app); 

//setting the port on which the server will run
app.set('port', process.env.PORT || 30004);

//catching uncaught exceptions so that the server doesnt go down
process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});

//starting the server at the port
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

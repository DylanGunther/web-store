var express = require('express');
var app = express();
var reload = require('reload');
var http = require('http')
var server = http.createServer(app)

app.set('port', process.env.PORT || 3000);

//global variables
//app.locals.siteTitle = '';

app.use(express.static('web-store/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// set up routing using express
app.use(require('./routes/home'));
app.use(require('./routes/gallery'));
app.use(require('./routes/message'));

var server = app.listen(app.get('port'), function() {
	console.log('Go to http://localhost:' + app.get('port') 
			+ ' on your browser');
});

reload(server, app);
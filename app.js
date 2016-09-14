var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(require('./routes/home'));
app.use(require('./routes/gallery'));
app.use(require('./routes/message'));

var server = app.listen(app.get('port'), function() {
	console.log('Go to http://localhost' + app.get('port') 
			+ ' on your browser');
});

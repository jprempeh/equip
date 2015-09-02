var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.set('port', port);

app.use(express.static(__dirname + '/../client'));

var server = app.listen(port, function () {
	console.log('Equip listening at http://localhost:%s', port);
});


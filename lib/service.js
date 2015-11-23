var express = require('express');
var url = require('url');

function start(router, handler) {
	var app = express();

	//app.engine('.html', ejs.__express);
	//app.set('view engine', 'html');

	app.all("*", function(req, res) {
		var pathName = url.parse(req.url).pathname;
		if(pathName != "/favicon.ico") {
			console.log("Get request path: " + pathName);
			router(handler, pathName, req, res);
		}
	});

	app.listen(1088);
	console.log("Server has started at port 1088");
}

exports.start = start;



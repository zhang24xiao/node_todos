var express = require('express')
	,url = require('url')
	,path = require('path')
	,ejs = require('ejs');

function start(router, handler) {
	var app = express();
	app.use(express.static(path.join(__dirname, '../public')));
	app.use(express.static(path.join(__dirname, '../views')));

	app.engine('.html', ejs.__express);
	app.set('view engine', 'ejs');

	app.all("*", function(req, res) {
		var pathName = url.parse(req.url).pathname;
		//if(pathName != "/favicon.ico") {
			console.log("Get request path: " + pathName);
			router(handler, pathName, req, res);
		//}
	});

	app.listen(1088);
	console.log("Server has started at port 1088");
}

exports.start = start;



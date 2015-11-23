var path = require('path')
	,fs = require('fs');

function index(request, response) {
	console.log("Handle index page.");

	// response.writeHead(200, {"Content-Type": "text/html"});
	 var startHtml = path.resolve("./views/pages/home.html");
	// fs.readFile(startHtml, function(err, data) {
	// 	if(err) {
	// 		console.log(err);
	// 	} else {
	// 		response.write(data);
	// 		response.end();
	// 	}
	// });
	response.sendfile(startHtml);
}

exports.index = index;
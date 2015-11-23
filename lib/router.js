function route(handler, path, request, response) {
	console.log("Going to route path: " + path);
	if(typeof handler[path] == "function") {
		handler[path](request, response);
	} else {
		console.log('path NOT found.');
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 NOT found");
		response.end();
	}
}

exports.route = route;
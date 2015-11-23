var service = require('./lib/service');
var router = require('./lib/router');
var reqHandler = require('./lib/reqHandler');


var handler = {};
handler["/"] = reqHandler.index;
handler["/index.html"] = reqHandler.index;

service.start(router.route, handler);
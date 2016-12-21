var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, {
		"Content-Type": "text/plain"});
	response.end("Hello from Cloud Foundry!\n");
}).listen(process.env.PORT || 3000);

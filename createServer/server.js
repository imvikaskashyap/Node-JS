let http = require("http");

http
	.createServer((req, res) => {
		res.write("<h1>This is create server file</h1>");
		res.end();
	})
	.listen(4500);

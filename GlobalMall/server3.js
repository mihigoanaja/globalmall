var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function (request, response) {
console.log('request ', request.url);
var filePath = '.' + request.url;
fs.readFile(filePath, function(error, content) {
if (error) {
	filePath = '.' + request.url + '/index.html';
	fs.readFile(filePath, function(err, con) {
	if (err) {
		response.end('<h1>NOT FOUND</h1>');
	}
	else
		response.end(con, 'utf-8');
});
 }
else
response.end(content, 'utf-8');
});
}).listen(8125);
console.log('Server running at http://127.0.0.1:8126/');
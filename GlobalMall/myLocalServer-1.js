var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {
console.log('request ', req.url);
var filePath = '.' + req.url;
fs.readFile(filePath, function(error, content) {
if (error) {
	filePath = '.' + req.url + '/index.html';
	fs.readFile(filePath, function(err, con) {
	if (err) {
		res.end('<h1>NOT FOUND</h1>');
	}
	else
		res.end(con);
});
 }
else
res.end(content);
});
}).listen(8125);
console.log('Server running at http://127.0.0.1:8126/');
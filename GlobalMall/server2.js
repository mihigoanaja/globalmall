var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function (request, response) {
console.log('request ', request.url);
var filePath = '.' + request.url;
if (filePath == './')
filePath = './index.html';
var extname = String(path.extname(filePath)).toLowerCase();
var contentType = 'text/html';
var mimeTypes = {
'.html': 'text/html',
'.js': 'text/javascript',
'.css': 'text/css',
'.json': 'application/json',
'.png': 'image/png',
'.jpg': 'image/jpg',
'.gif': 'image/gif',
'.wav': 'audio/wav',
'.mp4': 'video/mp4',
'.woff': 'application/font-woff',
'.ttf': 'applilcation/font-ttf',
'.eot': 'application/vnd.ms-fontobject',
'.otf': 'application/font-otf',
'.svg': 'application/image/svg+xml'
};
contentType = mimeTypes[extname] || 'application/octect-stream';
fs.readFile(filePath, function(error, content) {
if (error) {
response.end('<h1>NOT FOUND</h1>');
}
else
response.end(content, 'utf-8');
});
}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');
/* jshint esversion:6 */
var http = require('http');
var dispatcher = require('httpdispatcher');
var templates = require('./read_files');

dispatcher.onGet(/\//, function (req, res) {
  var file = req.url;
  var body = templates(file + '.html');
  if (body) {
    res.writeHead(200, {'Content-Type': 'html'});
  }else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
  }
  res.end(body);
});

http.createServer(function (req, res) {
  dispatcher.dispatch(req, res);
}).listen(8080);
console.log('Server running at http://localhost:8080/');

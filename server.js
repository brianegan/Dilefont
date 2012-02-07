// Just a basic server setup for this site
var stack = require('stack'),
    creationix = require('creationix'),
    http = require('http');

http.createServer(stack(
  creationix.log(),
  require('wheat')(__dirname)
)).listen(30540);


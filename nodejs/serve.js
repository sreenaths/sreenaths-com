// Watch & build
var watchr = require('watchr');
watchr.open(__dirname + "/templates", function () {

});

// Live reload
var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/dist");

// Open dist in browser
var open = require("open");
open("./dist/index.html");
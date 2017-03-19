var express = require('express');
var app=express();
app.enable('etag');
app.use(express.static("./public/"));


var port = 808;
app.listen(port);
console.log("Server is listening at port:" + port);

var express = require('express');
var app=express();


app.enable('etag');
app.set('view engine', 'pug');
app.use(express.static("./public/pages/"));
app.use(express.static("./public"));

var port = 808;
app.listen(port);
console.log("Server is listening at port:" + port);

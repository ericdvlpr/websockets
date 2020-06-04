var express = require('express');

//APP setup

var app = express();

var server = app.listen(4000,function(){
    console.log("listen to request on port 4000")
});

//Static files

app.use(express.static('public'));
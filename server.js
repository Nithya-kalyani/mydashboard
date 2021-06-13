var express = require ('express');
var app = express ();
var port = process.env.PORT || 8800;
var path = require('path');

app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'build/index.html'))
});


app.listen(port)
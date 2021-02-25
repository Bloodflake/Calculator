
var express = require('express');

var app = express();

app.get("/", (req, res)=> {
  res.send("hello");
});

app.listen(3000, function(){
  console.log("server listening on port 3000");
});

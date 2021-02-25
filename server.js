const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post('/calculator', function (req, res){
  res.sendFile(__dirname + "/calculator.html");
});

app.post('/bmicalculator', function (req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/calculatorResult", function (req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("result is " + result);
});

app.post('/bmicalculatorResult', function (req, res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  height /= 100;
  var bmi = weight / Math.pow(height, 2);

  res.send("Your Bmi is " + bmi);
})

app.listen(3000,function(req, res){
  console.log("server listening on port 3000");
});

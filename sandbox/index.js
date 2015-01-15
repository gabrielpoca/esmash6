var to5 = require('6to5-core');
var Sandbox = require('sandbox');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var sandbox = new Sandbox();

var urlencodedParser = bodyParser.urlencoded({
  extended: true
});

var transformCode = function(code) {
  return to5.transform(code, {}).code;
};

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/', function(req, res) {
  try {
    var code = transformCode(req.body.code);

    sandbox.run(code, function(result) {
      res.send(result);
    });
  } catch (e) {
    res.status(400);
    res.send('error');
  }
});

app.listen(9002);

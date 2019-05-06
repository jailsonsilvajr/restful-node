var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

app.get('', function(req, res){
  res.send({"success":"method get"});
});

app.post('', function(req, res){
  res.send({"success":"method post"});
});

app.put('', function(req, res){
  res.send({"success":"method put"});
});

app.delete('/:id', function(req, res){
  res.send({"success":"method delete"});
})

app.listen(3000, function(){

});

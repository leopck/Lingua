var express = require('express');
var app = express();
var fs = require("fs");
var path = require('path');

var jenkinsTask = require('./task/task_twilio')

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

// app.get('/deleteUser/:id', function (req, res) {
//    // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       data = JSON.parse( data );
//       delete data["user" + req.params.id];
       
//       console.log( data );
//       res.end( JSON.stringify(data));
//    });
// })

app.use('/static', express.static(path.join(__dirname, 'public')))

//Is there a better way to serve this static file? I've already implemented a static but how to utilize the link above?
app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, 'public/index.html'));
   // res.sendFile('/static/index.html');
 }); 

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log(path.join(__dirname, 'public'));   
   console.log("Example app listening at http://%s:%s", host, port)
})
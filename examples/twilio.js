var express = require('express');
var app = express();
var path = require('path');

var twilioTask = require('../task/task_twilio')
var jt = new twilioTask();

app.post('/reply', (req, res) => {
   console.log(req.body);   
   res = jt.sendConversation(res);
})

app.get('/start', function (req, res) {
   jt.sendFirstMsg();
})

app.use('/static', express.static(path.join(__dirname, '../public')))

//Is there a better way to serve this static file? I've already implemented a static but how to utilize the link above?
app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, '../public/index.html'));
}); 

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log(path.join(__dirname, 'public'));   
   console.log("Example app listening at http://%s:%s", host, port)
})
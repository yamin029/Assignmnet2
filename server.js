var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
const CURRENT_WORKING_DIR = process.cwd()
var path = require('path');
var bodyParser = require('body-parser')
var socket = require('socket.io');
var io = socket(server);

app.use(bodyParser.urlencoded({extended:true}))

io.on('connection', function(socket){
      console.log('A user connected');
      socket.on('disconnect', function(){
          console.log('User disconnected');
      });
  
      socket.on('chat message', function(msg){
          console.log('Message: '+msg);
      });
  
      socket.on('chat message', function(msg){
          io.emit('chat message', msg);
      });
  });
  


app.use('/public', express.static(path.join(CURRENT_WORKING_DIR, 'public')))

app.get('/',function(request,response){
      response.sendFile(__dirname + '/views/index.html')
})
app.get('/add',function(request,response){
      response.sendFile(__dirname + '/views/addnew.html')
})
app.get('/cart',function(request,response){
      response.sendFile(__dirname + '/views/cart.html')
})
app.get('/chat',function(request,response){
      response.sendFile(__dirname + '/views/chat.html')
})




server.listen(3000,'localhost',function(){
      console.log('server running ...')
})

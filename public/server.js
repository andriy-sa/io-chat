var io = require('socket.io')(6001);

var users = [];
io.on('connection',function(socket){
   var user = [];
   socket.on('message',function(data){
      socket.broadcast.emit('message',data);
   });

   socket.on('request_users',function(){
      socket.emit('users',users);
      console.log('send users to '+user.name);
   });

   socket.on('add_user',function(data){
      user = {
         'id'   : data.id,
         'name' : data.name
      };
      users.push(user);
         socket.broadcast.emit('add_user',user);
         console.log(user.name+' has connected');
   });

   socket.on('disconnect',function(){
      var my_index = users.indexOf(user);
      if(my_index !== -1){
         console.log(my_index);
         users.splice(my_index,1);
         socket.broadcast.emit('remove_user',user);
         console.log(user.name+' has disconnected');
      }
   });
});


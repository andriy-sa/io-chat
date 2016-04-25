module.exports = function(ngApp){
  ngApp.factory('Chat',function($http){
     return {
         getUser : function(){
             return $http({
                 method : 'GET',
                 'url'  : '/api/get_user'
             });

         },
         getMessages : function(room_id){
             return $http({
                method : 'GET',
                url    : '/api/get_messages',
                params : {'room_id' : room_id}
             });
         },
         getRooms : function(){
             return $http({
                method : 'GET',
                url    : '/api/get_rooms'
             });
         },
         findRoom : function(id){
             return $http({
                method : 'GET',
                url    : '/api/find_room',
                params : {'id' : id}
             });
         },
         newRoom : function(name,user_id){
           return $http({
              method : 'POST',
              url    : '/api/new_room',
              data   : {
                  'name' : name,
                  'creator_id' : user_id
              }
           });
         },
         newMessage  : function(user_id,message,room_id){
            return $http({
               method : 'POST',
               url    : '/api/new_message',
               data   : {
                   'message' : message,
                   'user_id' : user_id,
                   'room_id' : room_id
               }
            });
         },
         addUsersToRoom : function(users,room_id){
             return $http({
                method : 'POST',
                url    : '/api/add_users_to_room',
                data   : {
                    'users' : users,
                    'room_id' : room_id
                }
             });
         }
     }
  });
};

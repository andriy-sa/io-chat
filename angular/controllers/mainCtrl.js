module.exports = function(ngApp) {
    ngApp.controller('mainCtrl',['$scope','$filter','$timeout','Chat','Socket',
        function ($scope,$filter,$timeout,Chat,Socket) {
        $scope.user = [];
        $scope.room  = {
            'id' : 0
        };
        $scope.messages = [];
        $scope.rooms    = [];

        $scope.newMsg = '';
        $scope.newRoom = [];

        $scope.all_users = [];
        $scope.users    = [];
        $scope.chosenUsers = [];
        $scope.db_users = [];

        $scope.sendMsg = function(msg){
            if(msg != null && msg.trim() != ''){
                var message = {
                    'name'    : $scope.user.name,
                    'message' : msg,
                    'created_at' : $filter('date')(new Date(),"yyyy-MM-dd HH:mm:ss")
            };

                Socket.emit('message',message);
                Chat.newMessage($scope.user.id,msg,$scope.room_id);
                $scope.messages.push(message);
                $scope.newMsg = '';
            }
        };

        $scope.getMessages = function(){
          Chat.getMessages($scope.room.id)
              .success(function(data){
                  $scope.messages = data;
              });
        };

        $scope.getRooms = function(){
            Chat.getRooms()
                .success(function(data){
                    $scope.rooms = data;
                });
        };

        $scope.addRoom = function(room){
            if(!room.name || room.name.trim() == ''){
                var input = $('input#newRoom');
                input.css('border-color','red');
                $timeout(function(){
                    input.css('border-color','#ccc');
                },3000);
                return false;
            }
            Chat.newRoom(room.name,$scope.user.id)
                .success(function(data){
                   $scope.rooms.push(data);
                   $scope.changeRoom(data.id);
                   $('addRoom').modal('close');
                });
        };

        $scope.changeRoom = function(id){
            if(id === $scope.room.id){
                return false;
            }
            if(id === 0){
                $scope.room = {
                    'id' : 0
                };
                $scope.users = $scope.all_users;
                $scope.getMessages();
            } else {
                Chat.findRoom(id)
                    .success(function(data){
                        $scope.room = data;
                        $scope.db_users = data.users;
                        $scope.users = [];
                        var index = -1;
                        angular.forEach($scope.db_users,function(item,key){
                            index = $filter('myIndexOf')($scope.all_users,item);
                           // console.log($scope.all_users,item);
                            if(index != -1){
                                $scope.users.push($scope.all_users[index]);
                            }
                        });
                        $scope.getMessages();
                    })
                    .error(function(){
                        console.log('room not found');
                    });
            }
        };

        $scope.showAddUserModal = function(){
          $('#addUser').modal('show');
        };

        $scope.users = {};
        $scope.messages = [];

        $scope.newMsg = '';

        $scope.sendMsg = function(msg){
            if(msg != null && msg.trim() != ''){
                var message = {
                    'name'    : $scope.user.name,
                    'message' : msg
                };

                Socket.emit('message',message);

                $scope.messages.push(message);
                $scope.newMsg = '';
            }
        };

        console.log('in chat controller');

        $scope.getUser = function(){
            Chat.getUser()
                .success(function(data){
                    $scope.user = data.user;
                    Socket.connect();
                    Socket.emit('add_user',$scope.user);
                    Socket.emit('request_users',{});
                })
        };
        $scope.getMessages();
        $scope.getRooms();
        $scope.getUser();

        /* socket listeners */

        Socket.on('users',function(data){
           $scope.users = data;
           $scope.all_users = data;
        });

        Socket.on('add_user',function(data){
            var add_index = $filter('myIndexOf')($scope.all_users,data);
            if(add_index === -1){
                $scope.all_users.push(data);
                if($scope.room.id === 0){
                    $scope.users.push(data);
                    $scope.messages.push({
                        'message' : data.name+' has entered the chat!',
                        'name'    : ''
                    });
                } else {
                    var db_index = $filter('myIndexOf')($scope.db_users,data);
                    if(db_index != -1){
                        $scope.users.push(data);
                        $scope.messages.push({
                            'message' : data.name+' has entered the chat!',
                            'name'    : ''
                        });
                    }
                }

            }

        });

        Socket.on('remove_user',function(data){
            var delete_index = $filter('myIndexOf')($scope.all_users,data);
            if(delete_index != -1){
                $scope.all_users.splice(delete_index,1);
            }

            delete_index = $filter('myIndexOf')($scope.users,data);
            if(delete_index != -1){
                $scope.users.splice(delete_index,1);
                $scope.messages.push({
                    'message' : data.name+' has leave the chat!',
                    'name'    : ''
                });
            }
        });

        Socket.on('message',function(data){
           $scope.messages.push(data);
        });

        $scope.$on('$stateChangeStart',function(event){
           Socket.disconnect(true);
        });
    }]);
};


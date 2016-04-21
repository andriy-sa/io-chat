module.exports = function(ngApp) {
    ngApp.controller('mainCtrl',['$scope','Chat','Socket', function ($scope,Chat,Socket) {
        $scope.user = [];

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
        $scope.getUser();

        /* socket listeners */

        Socket.on('users',function(data){
           console.log('get users request ',data);
           $scope.users = data;
        });

        Socket.on('add_user',function(data){
            var add_index = $scope.users.indexOf(data);
            if(add_index === -1){
                $scope.users.push(data);
                $scope.messages.push({
                    'message' : data.name+' has entered the chat!',
                    'name'    : ''
                });
            }

        });

        Socket.on('remove_user',function(data){
            angular.forEach($scope.users,function(val,key){
               if(val.id == data.id){
                   $scope.users.splice(key,1);
                   $scope.messages.push({
                       'message' : data.name+' has leave the chat!',
                       'name'    : ''
                   })
               }
            });
        });

        Socket.on('message',function(data){
           $scope.messages.push(data);
        });

        $scope.$on('$stateChangeStart',function(event){
           Socket.disconnect(true);
        });
    }]);
};


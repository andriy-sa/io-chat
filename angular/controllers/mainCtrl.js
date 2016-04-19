module.exports = function(ngApp) {
    ngApp.controller('mainCtrl', function ($scope,Chat) {
        $scope.user = [];

        $scope.getUser = function(){
            Chat.getUser()
                .success(function(data){
                    $scope.user = data;
                })
        }

        $scope.getUser();
    });
};


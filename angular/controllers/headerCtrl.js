module.exports = function(ngApp) {
    ngApp.controller('headerCtrl',['$scope','$rootScope','$state','Auth', function ($scope,$rootScope,$state,Auth,Chat) {
        $scope.me = [];

        $scope.getMe = function(){
            Auth.getMe()
                .success(function(data){
                    if(data.user){
                        $scope.me = data.user;
                    }
                })
        };
        $scope.logout = function(){
            Auth.logout()
                .success(function(){
                    $scope.me = [];
                    $state.go('app.auth',{},{reload: true});
                })
        };
        $scope.getMe();
    }]);
};

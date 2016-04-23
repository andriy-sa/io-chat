module.exports = function(ngApp) {
    ngApp.controller('authCtrl',['$scope','$rootScope','$state','Auth', function ($scope,$rootScope,$state,Auth) {
        $scope.user = [];
        $scope.reg = [];
        console.log('in auth controller');

        $scope.login = function(user){
            Auth.login(user)
                .success(function(data){
                    $rootScope.log = false;
                    $state.go('app.home',{},{reload: true});
                });
        };

        $scope.register = function(reg){
            Auth.register(reg)
                .success(function(data){
                    $rootScope.log = false;
                    $state.go('app.home',{},{reload: true});
                });
        };
    }]);
};
module.exports = function(ngApp) {
    ngApp.controller('authCtrl', function ($scope,Auth) {
        $scope.user = [];
        $scope.login = function(user){
            Auth.login(user)
                .success(function(data){
                    console.log(data);
                });
        }
    });
};
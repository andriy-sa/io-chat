module.exports = function(ngApp){
    ngApp.factory('Auth',['$http',function($http){
        return {
            login : function(user){
                return $http({
                    method : 'POST',
                    url  : '/login',
                    data   : {
                        'email'    : user.email,
                        'password' : user.password,
                        'remember' : 1
                    }
                });

            },
            register : function(user){
                return $http({
                   method : 'POST',
                   url    : '/reg',
                   data   : {
                       'name'     : user.name,
                       'email'    : user.email,
                       'password' : user.password,
                       'password_confirmation' : user.password_confirmation
                   }
                });
            },
            logout : function(){
                return $http ({
                    method : 'GET',
                    url    : '/logout'
                })
            },
            getMe : function(){
                return $http({
                    method : 'GET',
                    url    : 'api/get_me'
                })
            },
            checkAuth: function(){
                return $http({
                    method : 'GET',
                    url    : 'api/check-guest'
                })
            }
        }
    }]);
};

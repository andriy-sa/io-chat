module.exports = function(ngApp){
    ngApp.factory('Auth',function($http){
        return {
            login : function(user){
                return $http({
                    method : 'POST',
                    'url'  : '/login',
                    data   : {
                        'email'    : user.email,
                        'password' : user.password,
                        'remember' : 1,
                    }
                });

            }
        }
    });
};

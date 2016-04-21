angular.module('postService',[])
    .factory('Post',function($http){
        return {
            getAll : function(offset){
                return $http({
                    method : 'GET',
                    url    : 'angular/all',
                    params : {'offset' : offset}
                })
            }
        }
    });

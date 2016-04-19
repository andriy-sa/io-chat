module.exports = function(ngApp){
  ngApp.factory('Chat',function($http){
     return {
         getUser : function(){
             return $http({
                 method : 'GET',
                 'url'  : '/api/get_user'
             });

         }
     }
  });
};

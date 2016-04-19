module.exports = function(ngApp) {
  ngApp.config(function($httpProvider){
      /* auth middleware */
      $httpProvider.interceptors.push(function($q, $rootScope, $location, $injector) {
          return {
              responseError: function(response) {
                  if (response.status === 401) {
                      $injector.get("$state").go("auth");
                  }
                  return $q.reject(response);
              }
          };
      });

      /* log middleware */
      $httpProvider.interceptors.push(function($q, $rootScope, $location, $injector) {
          return {
              responseError: function(response) {
                  if (response.status === 400) {
                      $rootScope.log      = response.data.type;
                      $rootScope.messages = response.data.messages;

                  }
                  return $q.reject(response);
              }
          };
      });
  })
};
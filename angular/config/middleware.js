module.exports = function(ngApp) {
  ngApp.config(function($httpProvider){
      /* auth middleware */
      $httpProvider.interceptors.push(function($q, $rootScope, $location, $injector) {
          return {
              responseError: function(response) {
                  if (response.status === 401) {
                      $injector.get("$state").go("app.auth");
                  }
                  if (response.status === 402){
                      $injector.get("$state").go("app.home");
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
  });
  ngApp.run(function($rootScope, $state, Auth,Chat){
      $rootScope.$on("$stateChangeStart", function(event, toState) {
          if (toState.data && toState.data.auth) {
             //   console.log('auth detected');
                Chat.getUser();
          }
          if (toState.data && toState.data.guest) {
            //  console.log('guest detected');
              Auth.checkAuth();
          }
      });
  });

};
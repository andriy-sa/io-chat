module.exports = function(ngApp) {
    ngApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode({enabled: true, requireBase : false});
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/",
                views: {
                    "header"  : {
                        templateUrl :'/views/blocks/header.html'

                    },
                    "content" : {
                        templateUrl : '/views/home.html',
                        controller: "mainCtrl"
                    }
                }
            })
            .state('auth', {
                url: "/auth",
                views: {
                    "header": {
                        templateUrl: '/views/blocks/header.html'

                    },
                    "content": {
                        templateUrl: '/views/auth.html',
                        controller: "authCtrl"
                    }
                }

            });
    });
};

module.exports = function(ngApp) {
    ngApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode({enabled: true, requireBase : false});
        //
        // Now set up the states
        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    "header": {
                        templateUrl :'/views/blocks/header.html',
                        controller  : "headerCtrl"
                    },
                    "content": {}
                }
            })
            .state('app.home', {
                url: "/",
                data : {'auth' : true},
                views: {
                    "content@" : {
                        templateUrl : '/views/home.html',
                        controller: "mainCtrl"
                    }
                }
            })
            .state('app.auth', {
                data : {'guest' : true},
                url: "/auth",
                views: {
                    "content@": {
                        templateUrl: '/views/auth.html',
                        controller: "authCtrl"
                    }
                }

            })
            .state('app.register', {
                data : {'guest' : true},
                url: "/register",
                views: {
                    "content@": {
                        templateUrl: '/views/register.html',
                        controller: "authCtrl"
                    }
                }

            });
    });
};

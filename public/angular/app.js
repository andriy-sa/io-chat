var postApp = angular.module('postApp',[
        'postCtrl',
        'postService',
        'ngAnimate',
        'infinite-scroll',
    ],
    function($interpolateProvider){
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});
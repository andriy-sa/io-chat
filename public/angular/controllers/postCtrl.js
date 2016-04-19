angular.module('postCtrl',[])
    .controller('PostController',function($scope, $http, Post){

        $scope.postData = {};
        $scope.posts = [];
        $scope.loading    = true;
        $scope.loadButton = false;
        $scope.isMore = true;

        $scope.offset = 0;

        $scope.initLoad = function(){
            if($scope.isMore){
                Post.getAll($scope.offset)
                    .success(function(data){
                        $scope.offset+=5;
                        if(data.length != 5){
                            $scope.isMore = false;
                        }
                        angular.forEach(data, function(item,key){
                            $scope.posts.push(item);
                        });
                        $scope.loading = false;

                    })
                    .error(function(){
                        console.log('error: 1');
                    })
            }
        }

       // $scope.initLoad();
    });

module.exports = function(ngApp){
    ngApp.factory('Socket',['socketFactory',function(socketFactory){
        return socketFactory();
    }]);
};

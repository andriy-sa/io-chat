module.exports = function(ngApp){
    require('./chatService.js')(ngApp);
    require('./authService.js')(ngApp);
    require('./socketService.js')(ngApp);
};

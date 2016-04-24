module.exports = function(ngApp){
    require('./socket.js')(ngApp);
    require('./angular-chosen.js')(ngApp);
};

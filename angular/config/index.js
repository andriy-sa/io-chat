module.exports = function(ngApp){
    require('./router.js')(ngApp);
    require('./middleware.js')(ngApp);
};

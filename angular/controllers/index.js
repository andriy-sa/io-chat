module.exports = function(ngApp){
    require('./mainCtrl.js')(ngApp);
    require('./authCtrl.js')(ngApp);
};

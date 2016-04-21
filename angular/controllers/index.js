module.exports = function(ngApp){
    require('./mainCtrl.js')(ngApp);
    require('./authCtrl.js')(ngApp);
    require('./headerCtrl.js')(ngApp);
};

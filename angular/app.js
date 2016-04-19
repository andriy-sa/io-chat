const angular = require('angular');
require('angular-ui-router');

const ngApp = angular.module('ngApp',[
    'ui.router'
]);
require('./config')(ngApp);
require('./services')(ngApp);
require('./controllers')(ngApp);

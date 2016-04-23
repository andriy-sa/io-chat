const angular = require('angular');
require('angular-ui-router');

const ngApp = angular.module('ngApp',[
    'ui.router',
    'btford.socket-io'
]);
require('./directives')(ngApp);
require('./filters')(ngApp);
require('./config')(ngApp);
require('./services')(ngApp);
require('./controllers')(ngApp);

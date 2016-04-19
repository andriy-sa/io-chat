module.exports = {
    context : __dirname + '/angular',
    entry   : './app.js',
    output : {
        path     : __dirname + '/public',
        filename : 'angular.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'}
        ]
    }
};

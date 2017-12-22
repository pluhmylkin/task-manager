require('babel-core/register')({
    retainLines: true
});
require('babel-polyfill');
require('./app.js');
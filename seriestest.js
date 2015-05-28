async = require('async');
ThunderConnector = require('thunder-connector');
ThunderConnector.connect();
var thetime = 6200;

async.series([
    function(callback) {
        setImmediate(function() {
            ThunderConnector.command('right');
            callback(null);
        });
    },

    function(callback) {
        setTimeout(function() {
            ThunderConnector.command('left');
            callback();
        }, thetime);
    },

    function(callback) {
        setTimeout(function() {
            ThunderConnector.command('right');
            callback(null, 'one');
        }, thetime);
    },

    function(callback) {
        setTimeout(function() {
            ThunderConnector.command('left');
            callback(null);
        }, thetime);
    },

    function(callback) {
        setTimeout(function() {
            ThunderConnector.command('stop');
            callback(null, 'two');
        }, thetime/2);
    }

]);

'use strict';
var _             = require('lodash'),
    async         = require('async');
module.exports = function(Test) { 
    Test.message = function(data, options, cb) { 
	async.waterfall([ 
	    function(next) { 
		next(null, "Hello World!");
	    }
	], cb);
    };
};

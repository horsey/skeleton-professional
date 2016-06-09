'use strict';
var _      = require('lodash'),
    async  = require('async'),
    utils   = require('../../utils'),
    moment = require('moment');



module.exports = function(Test) { 
    Test.time = function(data, options, cb) { 
	var timeHolder = {};
	async.waterfall([ 
	    function(next) { 
		var bool = utils.isCurrentDate(data.time);
		next();
	    }, 

	    function(next) { 
		var unix = moment().unix();
		timeHolder.unix=  unix;
		next();
	    },
	    
	    function(next) { 
		next(null, timeHolder);
	    }	
	], cb);
	
	
	
    };
};



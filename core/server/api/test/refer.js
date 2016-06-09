'use strict';
var _             = require('lodash'),
    async         = require('async'),
    practitioners = require('../practitioners'), 
    referral     = require('../referral');

module.exports = function(Test) { 
    Test.refer = function(data, options, cb) { 

	var userId;
	userId = data.userId;

	async.waterfall([
	
	    function(next) { 
		var filter = { 
		    userId: userId
		};
	
		practitioners.exists(filter, options, next);
	    }, 

	    function(practData, next) { 
		referral.create(practData, options, next);
	    }
	], cb);
    };
};

var _ = require('lodash'), 
    test         = require('./test');

http = function http(apiMethod) { 
    return function apiHandler (req, res, next) {
	var object = req.body, 
            options = _.extend({}, req.files, req.query, req.params, {
		context: { 
		    partnerId: req.ctx.partnerId ? req.ctx.partnerId : null, 
		    userId: req.ctx.userId ? req.ctx.userId : null,
		    userType: req.ctx.userType ? req.ctx.userType : null,
		    token: req.ctx.token ? req.ctx.token : null,
		    partnerName: req.ctx.partnerName ? req.ctx.partnerName : null
		}
	    });

	if (_.isEmpty(object)) { 
	    object = options; 
	    options = {};
	}
	return apiMethod(object, options, function(err, result) { 
	    if (err) { 
		var message = err.message;
		res.status(err.code).json({message: message});
	    }
	    else { 
		res.status('200').send(result);
	    }
	});
    };
}

module.exports =  { 
    http: http,
    test: test
};


var favicon       = require('static-favicon'), 
    cookieParser  = require('cookie-parser'), 
    bodyParser    = require('body-parser'), 
    logger        = require('morgan'), 
    hbs           = require('express-handlebars'), 

    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
   
     routes        = require('../routes'), 
//    middleware    = require('./middleware'), 
//    authenticator = require('./authenticator'), 
    partnerApp, 
    setupMiddleware;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token, version');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
}
    

setupMiddleware = function  setupMiddleware(appInstance) { 

    partnerApp = appInstance; 

    partnerApp.use(favicon());
    partnerApp.use(logger());
    partnerApp.use(bodyParser.json());
    partnerApp.use(bodyParser.urlencoded());
    partnerApp.use(cookieParser("adsf"));
    
    partnerApp.use(allowCrossDomain);

    partnerApp.use(function(req, res, next) { 
    	authenticator.authorizeLogin(req, res, next); 
    });


    partnerApp.use('/1hp', routes.api(middleware));
	partnerApp.use('/physios', routes.views);

    partnerApp.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
    }));

    // partnerApp.use(passport.initialize());
    // partnerApp.use(passport.session());

}

module.exports = setupMiddleware;

var cookieParser  = require('cookie-parser'), 
    bodyParser    = require('body-parser'), 
    logger        = require('morgan'), 
    hbs           = require('express-handlebars'), 

    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
   
    routes        = require('../routes'), 
     middleware    = require('./middleware'), 
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

    partnerApp.use(logger("combined"));
    partnerApp.use(bodyParser.json({extended: true}));
    partnerApp.use(bodyParser.urlencoded());
    partnerApp.use(cookieParser("adsf"));
    
    partnerApp.use(allowCrossDomain);

    partnerApp.use('/1hp', routes.api(middleware));
//    partnerApp.use('/physios', routes.views);

    partnerApp.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
    }));

    // partnerApp.use(passport.initialize());
    // partnerApp.use(passport.session());

}

module.exports = setupMiddleware;

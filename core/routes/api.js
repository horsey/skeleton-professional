var express = require('express'),
    api = require('../api'),
    apiRoutes;


apiRoutes = function apiRoutes(middleware) {

    //1Health Admin facing
    var router     = express.Router();
    router.del = router.delete;

    console.log(api);
    // //1Health Admin facing
    // router.post('/admin/partners/add',   api.http(api.partners.add));
    // router.get('/admin/partners/:id',    api.http(api.partners.read));
    // router.put('/admin/partners/:id',    api.http(api.partners.edit));
    // router.get('/admin/partners',        api.http(api.partners.list));
    // router.delete('/admin/partners/:id', api.http(api.partners.destroy));

    // //Partner facing
    // router.get('/partners',              api.http(api.partners.read));
    // // router.put('/partners/:id', partner.edit);
    // // router.post('/partners/register', partners.register);
    // //router.post('/partners/practitioner/add', api.http(api.partner.onboard);


    // //Partner secretary
    // router.post('/partners/secretary/add',    api.http(api.secretary.add));
    // router.get('/partners/secretary',         api.http(api.secretary.read));
    // router.put('/partners/secretary',         api.http(api.secretary.edit));
    // router.get('/partners/secretary/list',    api.http(api.secretary.browse));
    // // router.del('/partners/secretary/:sid', api.http(api.secretary.destroy));

    // //Practitioner
    // router.post('/practitioners/add',      api.http(api.practitioner.add));
    // router.get('/practitioners',           api.http(api.practitioner.read));
    // router.put('/practitioners',           api.http(api.practitioner.edit));
    // router.get('/practitioners/list',      api.http(api.practitioner.browse));
    // router.get('/practitioners/partners',  api.http(api.practitioner.partners));
    // router.post('/practitioners/disclaim', api.http(api.practitioner.disclaim));

    // //Locations
    // router.post('/practitioners/locations/add', api.http(api.locations.add));
    // router.get('/practitioners/locations/list', api.http(api.locations.list));

    // //Practitioner secretary
    // router.post('/practitioners/secretary/add',      api.http(api.secretary.add));
    // router.get('/practitioners/secretary/:sid',      api.http(api.secretary.read));
    // router.put('/practitioners/secretary/:sid',      api.http(api.secretary.edit));
    // router.get('/practitioners/secretary/list',      api.http(api.secretary.browse));
    // router.del('/practitioners/secretary/:id',       api.http(api.secretary.destroy));

    // //Events
    // router.post('/calendar/event/add',        api.http(api.events.add));
    // router.put('/calendar/event/edit',        api.http(api.events.resched));
    // router.post('/calendar/event/cancel',     api.http(api.events.cancel));
    // router.post('/calendar/event/complete',   api.http(api.events.complete));
    // router.post('/calendar/event/noshow',     api.http(api.events.noshow));
    // router.get('/calendar/event/list',        api.http(api.events.list));
    // router.get('/calendar/event/summary',     api.http(api.events.summary));
    // router.post('/calendar/event/reject',     api.http(api.events.reject));
    // router.get('/calendar/event/:eventId',    api.http(api.events.read));

    // //Calendar
    // router.post('/calendar/block',            api.http(api.calendar.block));
    // router.post('/calendar/unblock',          api.http(api.calendar.unblock));
    // router.get('/calendar/block',             api.http(api.calendar.listblocked));

    // //Consult Forms
    // router.post('/consultforms',               api.http(api.consultforms.add));
    // router.put('/consultforms/:cid',           api.http(api.consultforms.edit));
    // router.get('/consultforms/:cid',           api.http(api.consultforms.read));
    // router.get('/consultforms',                api.http(api.consultforms.list));
    // router.get('/consultforms/questions/:cid', api.http(api.consultforms.questions));
    // router.del('/consultforms/:cid',           api.http(api.consultforms.destroy));

    // //Patient Records
    // router.post('/patient/records',            api.http(api.records.add));
    // router.get('/patient/records',             api.http(api.records.list));
    // router.get('/patient/records/:pid',        api.http(api.records.questions));
    // router.get('/patient/records/user/:phone', api.http(api.records.questions));
    // router.post('/patient/records/close',      api.http(api.records.close));
    // router.post('/patient/records/notes/add',  api.http(api.notes.add));
    // router.post('/patient/records/send',       api.http(api.records.send));

    // //Patients
    // router.post('/patient',                    api.http(api.patients.add));
    // router.get('/patient/search',              api.http(api.patients.search));
    // router.get('/patient/list',                api.http(api.patients.list));
    // router.get('/patient/:pid',                api.http(api.patients.read));

    // //OTP based Auth
    // router.post('/accesscode',                api.http(api.auth.accesscode));
    // router.post('/validate',                  api.http(api.auth.validate));
    // router.post('/otpbycall',                 api.http(api.auth.otpbycall));
    // router.post('/logout',                    api.http(api.auth.logout));

    // //User registration
    // router.post('/user/register',             api.http(api.registration.register));
    // router.post('/user/approve',              api.http(api.registration.approve));

    // //Device management
    // router.post('/device/register',           api.http(api.deviceinfo.register));
    // router.post('device/unregister',          api.http(api.deviceinfo.unregister));

    // //Hospital DB
    // router.get('/hospitals',                  api.http(api.hospitals.list));
    // router.post('/hospitals',                 api.http(api.hospitals.add));
    // router.get('/hospitals/locations',        api.http(api.hospitals.locations));

    //Test API
    router.get('/message',                    api.http(api.test.message));
    router.post('/refer',                     api.http(api.test.refer));
    router.get('/asynctest',                  api.http(api.practitioner.partners));
    router.post('/time',                      api.http(api.test.time));
    return router;
};

module.exports = apiRoutes;

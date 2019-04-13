var Router= require('koa-router');
var bodyParser = require('koa-body')();

module.exports = function(app){

    var router = new Router();

    //Welcome Routes
    var welcomeCtrl = require('./../controllers/WelcomeCtrl');


    router.get('/home', welcomeCtrl.showHomePage);
    router.get('/homepage', welcomeCtrl.showHomePage1);
    router.get('/register', welcomeCtrl.showRegisterPage1);
    router.get('/login', welcomeCtrl.showLoginPage1);
    router.get("/dash",welcomeCtrl.showDummyPage);
    router.get('/applicationapprove',welcomeCtrl.applicationapprovepage);
    // router.post('/applicationapprove',welcomeCtrl.applicationapprovepage1);
    router.get('/success',welcomeCtrl.success);

    router.get('/adminhome',welcomeCtrl.adminhomepage1);

    router.post('/login', welcomeCtrl.showLoginPage2);
   // router.post('/login', welcomeCtrl.showLoginPage2);
    
    router.get('/signup', welcomeCtrl.SignupPage1);

    router.post('/signup', welcomeCtrl.Signuppage2);
    router.get("/logout",welcomeCtrl.logout);

    router.get("/queryresolve",welcomeCtrl.queryresolve);
    router.post("/queryres",welcomeCtrl.resolvequery);


    router.get("/queryanswer",welcomeCtrl.queryanswer);
    router.post("/queryans",welcomeCtrl.answerquery);

    router.get("/applicantdetail",welcomeCtrl.applicantdetailPage);
    router.post("/applicantdetail",welcomeCtrl.applicantdetailPage1);

     router.get('/applicanthome',welcomeCtrl.applicanthomepage1);
     router.get('/apply',welcomeCtrl.apply1);
     router.get('/noticeandupdate',welcomeCtrl.noticeandupdates);
     router.get('/modificationapprove',welcomeCtrl.modificationapprovepage);
    //  router.post('/modificationapprove',welcomeCtrl.modificationapprovepage1);
     router.get('/checkpassportstatus',welcomeCtrl.checkpassportstatus);

     router.post("/notice",welcomeCtrl.update_notice);

     router.get('/applicantmodification',welcomeCtrl.applicantmodificationpage);
     router.post('/applicantmodification',welcomeCtrl.applicantmodificationpage1);


    // navbar

     router.get("/cpvdivision",welcomeCtrl.cpvdivisionpage);
     router.get('/passportseva',welcomeCtrl.passportsevapage);
     router.get('/passportoffices',welcomeCtrl.passportofficespage);
     router.get('/visaservices',welcomeCtrl.visaservicespage);
     router.get('/rti',welcomeCtrl.rtipage);
     router.get('/citizencharter',welcomeCtrl.ccpage);
     router.get('/whatsnew',welcomeCtrl.whatsnewpage);
     router.get('/missionabroad',welcomeCtrl.missionabroadPage);
     router.get('/trackgrivience',welcomeCtrl.trackgriviencePage);
     

    return router.middleware();
}

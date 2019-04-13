var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils=require('./../utils/databaseUtils');

module.exports = {

    answerquery : function*(next)
    {
        var data = this.request.body;
        console.log('body',data);
        var res  = yield databaseUtils.executeQuery(util.format('insert into queryanswer(queryans) values("%s")',data));
        console.log("sdfjhrgkjtehirof")
        this.status = 200;
    },

   



    resolvequery : function*(next)
    {
        var data = this.request.body;
        console.log('body',data);
        var res  = yield databaseUtils.executeQuery(util.format('insert into queryresolve(queryresolve) values("%s")',data));
        console.log("sdfjhrgkjtehirof")
        this.status = 200;
    },

    queryresolve: function* (next) {
        if(this.currentUser){
            var data= yield databaseUtils.executeQuery(util.format('select * from queryanswer'));
            var data1=yield databaseUtils.executeQuery(util.format('select * from queryresolve'));
            yield this.render('queryresolve',{
                queryans:data,
                queryres:data1
                

            });
        } else{
           yield this.render('homepage');
        }
    },



    queryanswer: function* (next) {
        if(this.currentUser){
            var data= yield databaseUtils.executeQuery(util.format('select * from queryresolve'));
            yield this.render('queryanswer',{
                queryres:data
            });
        } else{
           yield this.render('homepage');
        }
    },



    // whatsnewpage: function* (next) {

    //     var data = yield databaseUtils.executeQuery(util.format('select * from notice'));


    //     yield this.render('whatsnew',{
    //         notice:data
    //     });
    // },








    

    update_notice : function*(next)
    {
        var data = this.request.body;
        console.log('body',data);
        var res  = yield databaseUtils.executeQuery(util.format('insert into notice(msg) values("%s")',data));
        console.log("sdfjhrgkjtehirof")
        this.status = 200;
    },


    showDummyPage:function*(next){
        if(this.currentUser.role=='admin')
        yield this.render("adminhome");
        else yield this.render("applicanthome");
    },

    applicantdetailPage1: function* (next) {
        var fname = this.request.body.FirstName;
        var lname = this.request.body.LastName;
        var email = this.request.body.email;
        var gender = this.request.body.gender;
        var oname = this.request.body.other_name;
        var cname = this.request.body.changed_name;
        var PAN = this.request.body.PAN;
        // var email = this.request.body.email;
        // var phno = this.request.body.phno;
        // var uname = this.request.body.uname;
        var phone = this.request.body.phone;
        var maritalstatus = this.request.body.maritalstat;
        var emptype = this.request.body.emptype;
        var state = this.request.body.state;
        // var city = this.request.body.city;
        var ifgovt = this.request.body.ifgovt;
        var gvdm = this.request.body.gvdm;
        var vid = this.request.body.VID;
        var adhar = this.request.body.adhar;
        // var adhar = this.request.body.fields.adhar;     is type se change karna hai body ki jagaha body .fields
        // var pic = this.request.body.files.pic.split("//")[3];
        // now use pic as normal variable
        var dob = this.request.body.bday;
        // var pindia = this.request.body.pindia;
        var pob = this.request.body.POB;
        // var res = yield databaseUtils.executeQuery(util.format('insert into user (First_Name,Last_Name,username,password,emailid,phone_no) values("%s","%s","%s","%s","%s","%s")',fname,lname,uname,password,email,phno));
        var res = yield databaseUtils.executeQuery(util.format('insert into applicantdetails (MaritalStatus, ifgovt, PAN , EmploymentType , gvdm , other_name , state , changed_name , Voter_Id , First_Name , Last_Name , email , phone , gender , adhar_no,PoB,dob) values("%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s")' ,maritalstatus,ifgovt,PAN,emptype,gvdm,oname,state,cname,vid,fname,lname,email,phone,gender,adhar,pob,dob));
        console.log(res);
        this.redirect('/app/success');

    },

    applicanthomepage1: function* (next) {
        if(this.currentUser){
            yield this.render('applicanthome',{

            });
        } else{
           yield this.render('homepage');
        }
    },
    

    applicationapprovepage1: function* (next) {
        if(this.currentUser){
            yield this.render('applicantionapprove',{

            });
        } else{
           yield this.render('homepage');
        }
    },

    applicationapprovepage: function* (next) {

        var ID;
    try{ ID=this.currentUser.ID;}
    catch(e){ID=0;}
       
        var applicationqueryString = ' select * from applicantdetails';
        var applicationquery= util.format(applicationqueryString);
        var result = yield databaseUtils.executeQuery(applicationquery);
        var applicationDetails = result;
        console.log(applicationDetails)
        


        yield this.render('applicationapprove',{
            applicationDetails : applicationDetails,

        });


        
    },


    modificationapprovepage: function* (next) {

        var ID;
    try{ ID=this.currentUser.ID;}
    catch(e){ID=0;}
       
        var applicationqueryString = ' select * from applicantmodification';
        var applicationquery= util.format(applicationqueryString);
        var result = yield databaseUtils.executeQuery(applicationquery);
        var applicationDetails1 = result;
        console.log(applicationDetails1)
        


        yield this.render('modificationapprove',{
            applicationDetails1 : applicationDetails1,

        });


        
    },


    

    success: function* (next) {
        yield this.render('success',{

        });
    },
   
    adminhomepage1: function* (next) {
        if(this.currentUser){
            yield this.render('adminhome',{

            });
        } else{
           yield this.render('homepage');
        }
    },
    
    
    apply1: function* (next) {
        if(this.currentUser){
            yield this.render('apply',{

            });
        } else{
           yield this.render('homepage');
        }
    },




    applicantdetailPage: function* (next) {
        if(this.currentUser){
            yield this.render('applicantdetail',{

            });
        } else{
           yield this.render('homepage');
        }
        
    },

    applicantmodificationpage: function* (next) {
        if(this.currentUser){
            yield this.render('applicantmodification',{

            });
        } else{
           yield this.render('homepage');
        }
    },


    applicantmodificationpage1: function* (next) {
        var fname = this.request.body.FirstName;
        var lname = this.request.body.LastName;
        var email = this.request.body.email;
        var gender = this.request.body.gender;
        var oname = this.request.body.other_name;
        var cname = this.request.body.changed_name;
        var PAN = this.request.body.PAN;
        // var email = this.request.body.email;
        // var phno = this.request.body.phno;
        // var uname = this.request.body.uname;
        var phone = this.request.body.phone;
        var maritalstatus = this.request.body.maritalstat;
        var emptype = this.request.body.emptype;
        var state = this.request.body.state;
        // var city = this.request.body.city;
        var ifgovt = this.request.body.ifgovt;
        var gvdm = this.request.body.gvdm;
        var vid = this.request.body.VID;
        var adhar = this.request.body.adhar;
        // var adhar = this.request.body.fields.adhar;     is type se change karna hai body ki jagaha body .fields
        // var pic = this.request.body.files.pic.split("//")[3];
        // now use pic as normal variable
        var dob = this.request.body.bday;
        // var pindia = this.request.body.pindia;
        var pob = this.request.body.POB;
        // console.log(fname);
        // var res = yield databaseUtils.executeQuery(util.format('insert into user (First_Name,Last_Name,username,password,emailid,phone_no) values("%s","%s","%s","%s","%s","%s")',fname,lname,uname,password,email,phno));
        var res = yield databaseUtils.executeQuery(util.format('insert into applicantmodification (MaritalStatus, ifgovt, PAN , EmploymentType , gvdm , other_name , state , changed_name , Voter_Id , First_Name , Last_Name , email , phone , gender , adhar_no,PoB,dob) values("%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s")' ,maritalstatus,ifgovt,PAN,emptype,gvdm,oname,state,cname,vid,fname,lname,email,phone,gender,adhar,pob,dob));
        console.log(res);
        this.redirect('/app/success');

    },
    

    Signuppage2:function*(next){
        console.log(this.request.body);
        var fname = this.request.body.fname;
        var lname = this.request.body.lname;
        var email = this.request.body.email;
        var phno = this.request.body.phno;
        var uname = this.request.body.uname;
        var password = this.request.body.password;
        var res = yield databaseUtils.executeQuery(util.format('insert into user (First_Name,Last_Name,username,password,emailid,phone_no) values("%s","%s","%s","%s","%s","%s")',fname,lname,uname,password,email,phno));
        console.log(res);
        this.redirect('/app/homepage'); 

    },
    showHomePage: function* (next) {
        yield this.render('home',{

        });
    },


    showHomePage1: function* (next) {
        var data = yield databaseUtils.executeQuery(util.format('select * from notice'));


        yield this.render('homepage',{
            notice:data
        });
    },


    showRegisterPage1: function* (next) {
        yield this.render('register',{

        });
    },
   
    showLoginPage1: function* (next) {
        yield this.render('Login',{

        });
    },
    showLoginPage2:function*(next){
        console.log(this.request.body)
        var email = this.request.body.email;
        var pwd = this.request.body.password;
        var user = yield databaseUtils.executeQuery(util.format('select u.*,r.rolename as role from user u left join role r on u.id=r.user_id where u.emailid="%s" and u.password="%s"',email,pwd));

        if(user.length==0){
            yield this.render("login",{
                msg:'Wrong E-mail ID or Password'
            });
        }else{
            sessionUtils.saveUserInSession(user[0],this.cookies);
            this.redirect("/app/dash");
        }
    },





    // showLoginPage2:function* (next){

    //     var user=this.request.body.email;
    //     var pwd=this.request.body.password;
    
    //     var queryString='SELECT * from signup where emailid="%s" AND password="%s"';
    //     var query=util.format(queryString,user,pwd);
    //     var user=yield databaseUtils.executeQuery(query);
        
    //     //console.log(user);
    //     if(user.length!=0 ){
    //         sessionUtils.saveUserInSession(user[0],this.cookies);
    //         this.redirect('/app/page2');
    //     }
    //     else{
    //         this.redirect('/app/login');
    //     }
    // },


// NAVBAR
    
    cpvdivisionpage: function* (next) {
        yield this.render('cpvdivision',{

        });
    },
   

    passportsevapage: function* (next) {
        yield this.render('passportseva',{

        });
    },
   


    passportofficespage: function* (next) {
        yield this.render('passportoffices',{

        });
    },
   
    visaservicespage: function* (next) {
        yield this.render('visaservices',{

        });
    },
   

    rtipage: function* (next) {
        yield this.render('rti',{

        });
    },
   

    ccpage: function* (next) {
        yield this.render('citizencharter',{

        });
    },
   
    whatsnewpage: function* (next) {

        var data = yield databaseUtils.executeQuery(util.format('select * from notice'));


        yield this.render('whatsnew',{
            notice:data
        });
    },




    SignupPage1: function* (next) {
        yield this.render('signup',{

        });
    },
   
    missionabroadPage: function* (next) {
        yield this.render('missionabroad',{

        });
    },
   
    trackgriviencePage: function* (next) {
        yield this.render('trackgrivience',{

        });
    },
   

    noticeandupdates: function* (next) {
        if(this.currentUser){
            yield this.render('noticeandupdate',{

            });
        } else{
           yield this.render('homepage');
        }
    },
    // modificationapprove: function* (next) {
    //     if(this.currentUser){
    //         yield this.render('modificationapprove',{

    //         });
    //     } else{
    //        yield this.render('homepage');
    //     }
    // },
   
    checkpassportstatus: function* (next) {
        if(this.currentUser){
            yield this.render('checkpassportstatus',{

            });
        } else{
           yield this.render('homepage');
        }
    },
   
    




    // Signup: function* (next){
    //     var fname=this.request.body.fname;
    //     var lname=this.request.body.lname;
    //     var email=this.request.body.email;
    //     var uname=this.request.body.uname;
    //     var phone=this.request.body.phno;
    //     var password=this.request.body.password;
    
    //     var queryString='INSERT INTO signup (First_Name,Last_Name,username,password,emailid,phone_no) VALUES("%s","%s","%s","%s","%s","%s")';
    //     var query=util.format(queryString,fname,lname,email,uname,phone,password);
    
    //     var errormsg;
    
    //     try{
    //         var result=yield databaseUtils.executeQuery(query);
    
    //        // queryString='SELECT * FROM USER WHERE ID = %s';
    //        // query = util.format(queryString,result.ID);
    //         //result=yield databaseUtils.executeQuery(query);
    
    //         //var insertedUser=result[6];
    //         //sessionUtils.saveUserInSession(insertedUser,this.cookies);
    //     }
    //     catch(e){
    //         if(e.code === 'ER_DUP_ENTRY'){
    //             errormsg='user already exists';
    //         } 
    //         else {
    //             errormsg='error';
    //         }
    //     }
    //     if(errormsg){
    //         this.redirect(/app/signup);
    //     }
    //     else{
    //        this.redirect(/app/homepage);
    //     }
    // },















    logout: function* (next) {
        var sessionId = this.cookies.get("SESSION_ID");
        if(sessionId) {
            sessionUtils.deleteSession(sessionId);
        }
        this.cookies.set("SESSION_ID", '', {expires: new Date(1), path: '/'});

        this.redirect('/app/homepage');
    }
}

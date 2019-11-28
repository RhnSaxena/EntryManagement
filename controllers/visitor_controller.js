let Visitor = require('../models/visitors');

exports.get_activity=function(req, res, next){
    var dataObject;
    let fetch_db=require('../controllers/populate_hostlist');
    fetch_db.asyncFind((err, data)=>{
        res.render('./visitor_form',{"title":"Visitor",data:data})   
    })
}

exports.submit_form=function(req, res, next){
    var time = Date();
    var newVisitor = {
        name: req.body.v_name,
        email: req.body.v_email,
        phoneno: req.body.v_phno,
        check_in: time,
        check_out: time,
        host_id: req.body.vh_name
    };
    Visitor.create(newVisitor,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    })
    res.render('submission', { 
        title: 'Visitor Registered',
        content: 'Your appointment has been successfully booked.'
    });
}

exports.get_active_visitors=function(req, res, next){
    res.render('./active_visitors',{"title":"Visitor"}) ;
}

exports.get_by_name=function(req, res, next){
    let fetch_db=require('../controllers/populate_active_visitors');
    var visitorName=req.body.visitor_name;
    if(visitorName==''){
        visitorName='NA';
    }
    fetch_db.asyncFind((err, data)=>{
        res.render('./visitor_checkout',{'title':"Visitor",data:data, req_name:visitorName});   
    })
}

exports.checkout=function(req, res, next){
    let fetch_db=require('../controllers/visitorbyID');
    fetch_db.asyncFind(req.body.host_id,(err, data)=>{
        res.render('./submission.ejs',{title:"Visitor",
        content:"You have been checked out successfully.\nHave a nice day."})  ;
    })
}
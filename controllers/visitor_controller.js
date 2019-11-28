let Visitor = require('../models/visitors');

exports.get_activity=function(req, res, next){
    var dataObject;
    let fetch_db=require('../controllers/populate_hostlist');
    fetch_db.asyncFind((err, data)=>{
        res.render('./partials/visitor_form',{"title":"Visitor",data:data})   
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
    res.render('visitor_submission', { title: 'Visitor Registered'});
}
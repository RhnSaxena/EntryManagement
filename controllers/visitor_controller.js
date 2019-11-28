let Visitor = require('../models/visitors');

exports.get_activity=function(req, res, next){
    res.render('visitor_view', { title: 'Visitor' });
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
let Host = require('../models/hosts');

exports.get_activity=function(req, res, next){
  res.render('host_view', { title: 'Hosts'});
}

exports.submit_form=function(req, res, next){
  var newHost = {
    name: req.body.h_name,
    email: req.body.h_email,
    address: req.body.h_address,
    phoneno: req.body.h_phno
  };
  Host.create(newHost,(err,data)=>{
    if(err){
      console.log(err);
    }else{
      console.log(data);
    }
  })
}

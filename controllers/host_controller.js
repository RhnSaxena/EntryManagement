let Host = require('../models/hosts');

// To render the page to capture details from the user.
exports.get_activity=function(req, res, next){
  res.render('host_view', { title: 'Hosts'});
}

// To submit the form.
// This will be invoked after the form submission on host_view View.
exports.submit_form=function(req, res, next){
  // Creating new document to insert in the database
  var newHost = {
    name: req.body.h_name,
    email: req.body.h_email,
    address: req.body.h_address,
    phoneno: req.body.h_phno
  };
  var title = '';
  var content = '';
  // Adding to the database
  Host.create(newHost,(err,data)=>{
    if(err){
      console.log(err);
    }else{
      console.log("The Host is registered.");
    }
  })
  //  Render the submission page as per the case.
  res.render('submission', { 
    title: 'Registration',
    content: 'You have been successfully registered. Have a nice day!'
  });
}
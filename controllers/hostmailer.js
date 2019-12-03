  var mailer = require('./mailer');
  var Host = require('../models/hosts');
  var mongoose= require("mongoose");

  // This will send an email to the host
  // informing him / her about the appointment request.
  exports.sendMail = function (req){
    console.log(req.body);
    var error;
    // Fetching the Database to find the Host Document by it's ID.
    Host.findById(req.body.vh_name).exec((err,host_data)=>{
      if(err){
        error = err;
      }else{
        var mailData = [];
        // Setting up the email content.
        var email = host_data.email;
        var subject = "Request for Appointment";
        var message = ` Dear ${host_data.name}, <br><br>
        We have someone to meet you.<br>
        <strong>Visitor Name :</strong> ${req.body.v_name}
        <br><strong>Visitor Phone Number :</strong> ${req.body.v_phno}
        <br><strong>Visitor Email :</strong> ${req.body.v_email}`;
        // Adding the email content to mailData.
        mailData.push(email);
        mailData.push(subject);
        mailData.push(message);
        // Sending the email.
        mailer.mailSender(mailData).catch(console.error);
      }
    })
  }
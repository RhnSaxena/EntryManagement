var mailer = require('./mailer');
var Host = require('../models/hosts');
var mongoose= require("mongoose");

sendMailToHost = function (visitor_data,host_data){
    var mailData = [];
        var email = host_data.email;
        var subject = "Appointment Acknowledgement";
        var message = ` Dear ${host_data.name}, <br><br>
        We hope the meeting worked out.<br>
        Here are the details of your visitor:<br><br>
        <strong>Visitor Name :</strong> ${visitor_data.name}
        <br><strong>Address :</strong> ${host_data.address}
        <br><strong>Visitor Phone Number :</strong> ${visitor_data.phoneno}
        <br><strong>Visitor Email :</strong> ${visitor_data.email}
        <br><strong>Check In :</strong> ${visitor_data.check_in}
        <br><strong>Check Out :</strong> ${visitor_data.check_out}`;
  
    mailData.push(email);
    mailData.push(subject);
    mailData.push(message);
    // console.log(mailData);
    mailer.mailSender(mailData).catch(console.error);

}

sendMailToVisitor = function (visitor_data,host_data){
    var mailData = [];
        var email = visitor_data.email;
        var subject = "Appointment Acknowledgement";
        var message = ` Dear ${visitor_data.name}, <br><br>
        We hope the meeting worked out.<br>
        Here are the details of your visit:<br><br>
        <strong>Host Name :</strong> ${host_data.name}
        <br><strong>Address :</strong> ${host_data.address}
        <br><strong>Host Phone Number :</strong> ${host_data.phoneno}
        <br><strong>Host Email :</strong> ${host_data.email}
        <br><strong>Check In :</strong> ${visitor_data.check_in}
        <br><strong>Check Out :</strong> ${visitor_data.check_out}`;
  
    mailData.push(email);
    mailData.push(subject);
    mailData.push(message);
    // console.log(mailData);
    mailer.mailSender(mailData).catch(console.error);

}

exports.sendMail = function(visitor_data){

    var error;
    Host.findById(visitor_data.host_id).exec((err,host_data)=>{
      if(err){
        error = err;
      }else{
        sendMailToHost(visitor_data,host_data);
        sendMailToVisitor(visitor_data,host_data);
      }
    })
    //callback(error); 
}
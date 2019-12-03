var mailer = require('./mailer');
var Host = require('../models/hosts');
var mongoose= require("mongoose");

// To send the Meeting Acknowledgement to the Host after visitor checkout.
sendMailToHost = function (visitor_data,host_data){
    var mailData = [];
    //  Setting up the content of the email body. 
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
    // Adding to mailData JSON object.
    mailData.push(email);
    mailData.push(subject);
    mailData.push(message);
    // Passing mailData to mailsender function to send the mail.
    mailer.mailSender(mailData).catch(console.error);

}

// To send the Meeting Acknowledgement to the Visitor after visitor checkout.
sendMailToVisitor = function (visitor_data,host_data){
    var mailData = [];
    //  Setting up the content of the email body. 
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
    // Adding to mailData JSON object.
    mailData.push(email);
    mailData.push(subject);
    mailData.push(message);
    // Passing mailData to mailsender function to send the mail.
    mailer.mailSender(mailData).catch(console.error);

}

// This function will be invoked after the visitor performs checkout.
// It will further invoke functions to send mails to host as well as visitor. 
exports.sendMail = function(visitor_data){
    var error;
    Host.findById(visitor_data.host_id).exec((err,host_data)=>{
      if(err){
        error = err;
      }else{
        // Send mail to Host.
        sendMailToHost(visitor_data,host_data);
        // Send mail to Visitor.
        sendMailToVisitor(visitor_data,host_data);
      }
    })
}
let Visitor = require('../models/visitors');
let checkoutMailer = require('./checkoutMailer');

// To perform check-out
// This will update the checkout time of the visitor.
exports.updateCheckOut = function(visitor_id, callback){
  // Fetching the database and finding the visitor by it's id.    
  Visitor.find({_id:visitor_id}).exec(function(err,data){
      if (err || !data.length){
        console.log('there was a problem');
        callback(err, null);
      }else{
        console.log("fetched data is\t\t"+data);
        var time = Date();
        data[0].check_out = time;
        // Updating the checkout time of the visitor.
        data[0].save();
        // Sending the mails to host and the visitor.
        checkoutMailer.sendMail(data[0],(err)=>{
          if(err){
            console.log("Error while sending mail");
          }else{
            console.log("Mail Sent");
          }
        });
        callback(err,data);
      }
  });
}
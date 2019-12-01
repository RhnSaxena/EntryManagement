let Visitor = require('../models/visitors');
let checkoutMailer = require('./checkoutMailer');
exports.updateCheckOut = function(visitor_id, callback){
    
    
  Visitor.find({_id:visitor_id}).exec(function(err,data){
      if (err || !data.length){
        console.log('there was a problem');
        callback(err, null);
      }else{
        console.log("fetched data is\t\t"+data);
        var time = Date();
        data[0].check_out = time;
        data[0].save();

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
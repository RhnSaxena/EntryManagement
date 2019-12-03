let Visitor = require('../models/visitors');

// To fetch the database and get all
// Visitor documents.
// The visitors with same value of check-in and check-out time will be considered to be active.
exports.asyncFind = function(callback){
  Visitor.find({}).exec(function(err,data){
      if (err || !data.length){
        console.log('there was a problem');
        callback(err, null);
      }else{
        var dataObject = [];
        // Using for loop to find all the active visitors
        // and add them to dataObject.
        data.forEach( function (temp){
            if(!(temp.check_in<temp.check_out)){
                dataObject.push(temp);
            }
        });
        callback(err,dataObject);
      }
  });
}
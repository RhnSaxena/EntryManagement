let Host = require('../models/hosts');

// To fetch the database a get all
// host documents.
exports.asyncFind = function(callback){
  Host.find({}).exec(function(err,data){
      if (err || !data.length){
          console.log('there was a problem');
          callback(err, null);
      }else{
          callback(err,data);
      }
  });
}
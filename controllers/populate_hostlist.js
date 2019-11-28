let Host = require('../models/hosts');

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
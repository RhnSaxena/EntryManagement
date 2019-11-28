let Visitor = require('../models/visitors');

exports.asyncFind = function(h_id,callback){
    
    
  Visitor.find({_id:h_id}).exec(function(err,data){
      if (err || !data.length){
        console.log('there was a problem');
        callback(err, null);
      }else{
        console.log("fetched data is\t\t"+data);
        var time = Date();
        data[0].check_out = time;
        data[0].save();
        
        callback(err,data);
      }
  });
}
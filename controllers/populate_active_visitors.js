let Visitor = require('../models/visitors');

exports.asyncFind = function(callback){
  Visitor.find({}).exec(function(err,data){
      if (err || !data.length){
        console.log('there was a problem');
        callback(err, null);
      }else{
        var dataObject = [];
        data.forEach( function (temp){
            if(!(temp.check_in<temp.check_out)){
                dataObject.push(temp);
            }
        });
        callback(err,dataObject);
      }
  });
}
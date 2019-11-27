exports.get_activity=function(req, res, next){
  res.render('host_view', { title: 'Hosts'});
}

exports.submit_form=function(req, res, next){
  console.log(req);
}

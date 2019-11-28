exports.get_landing=function(req, res, next) {
  res.render('landing_view', { title: 'Express' });
};

exports.redirect=function(req, res, next) {
  console.log(req.body.userType.toString().trim());
  if(req.body.userType.toString().trim()=='Host'){
    res.redirect('/hosts');
  }else{
    res.redirect('/visitors');
  }
};
/*  Render the landing page of the project
    Landing page is the Home Page i.e., initial welcome page. */
exports.get_landing=function(req, res, next) {
  res.render('landing_view', { title: 'Express' });
};

/*  This function will redirect the user 
    as per the role he chooses to move forward with. */
exports.redirect=function(req, res, next) {
  if(req.body.userType.toString().trim()=='Host'){
    res.redirect('/hosts');               // For the 'Host' Role
  }else{
    res.redirect('/visitors');            // For the 'Visitor' Role
  }
};
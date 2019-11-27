function get_landing(req, res, next) {
  res.render('landing', { title: 'Express' });
};
exports.get_landing=get_landing;
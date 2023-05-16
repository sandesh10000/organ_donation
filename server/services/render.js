exports.homeroutes = (req, res) => {
  res.render("index");
};
exports.register = (req, res) => {
  res.render("register");
};
exports.login = (req, res) => {
  res.render("login");
};

exports.profile = (req, res) => {
  var context = req.dataprocessed;
  req.app.locals.specialContext = null;
  res.render("profile",{data:context});
};


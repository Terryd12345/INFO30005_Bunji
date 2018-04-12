module.exports.getHome = (req, res) => {
  res.render("home");
};

module.exports.getSkills = (req, res) => {
  res.render("selectSkills");
};

module.exports.getDashboard = (req, res) => {
  res.render('dashboard');
};

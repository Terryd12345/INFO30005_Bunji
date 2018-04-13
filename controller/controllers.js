module.exports.getHome = (req, res) => {
  res.render("home");
};

module.exports.getSelectSkills = (req, res) => {
  res.render("selectSkills");
};

module.exports.getFindMentors = (req, res) => {
  res.render("findMentors");
};

module.exports.getDashboard = (req, res) => {
  res.render("dashboard");
};

module.exports.getProfile = (req, res) => {
  res.render("profile");
};

module.exports.getHome = (req, res) => {
  res.render("home");
};

module.exports.getSelectSkills = (req, res) => {
  res.render("selectSkills");
};

module.exports.getFindMentor = (req, res) => {
  res.render("findMentor");
};

module.exports.getDashboard = (req, res) => {
  res.render("dashboard");
};

module.exports.getProfile = (req, res) => {
  res.render("profile");
};

module.exports.getRelationsips = (req, res) => {
  res.render("relationships");
}
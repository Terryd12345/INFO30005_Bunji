module.exports.getHome = (req, res) => {
  res.render("home");
};

module.exports.getSkills = (req, res) => {
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

module.exports.getRelationsips = (req, res) => {
  res.render("relationships");
}
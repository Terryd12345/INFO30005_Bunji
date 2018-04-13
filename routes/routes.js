const express = require('express');
const controllers = require('../controller/controllers.js');
const router = express.Router();

router.get('/', controllers.getHome);
router.get('/select-skills', controllers.getSelectSkills);
router.get('/find-mentors', controllers.getFindMentors);
router.get('/dashboard', controllers.getDashboard);
router.get('/profile', controllers.getProfile);

module.exports = router;

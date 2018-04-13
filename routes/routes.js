const express = require('express');
const controllers = require('../controller/controllers.js');
const router = express.Router();

router.get('/profile', controllers.getProfile);
router.get('/dashboard', controllers.getDashboard);
router.get('/findMentors', controllers.getFindMentors);
router.get('/skills', controllers.getSkills);
router.get('/', controllers.getHome);



module.exports = router;

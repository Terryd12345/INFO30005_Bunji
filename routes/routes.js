const express = require('express');
const controllers = require('../controller/controllers.js');
const router = express.Router();

router.get('/', controllers.getHome);
router.get('/select-skills', controllers.getSelectSkills);
router.get('/find-mentor', controllers.getFindMentor);
router.get('/dashboard', controllers.getDashboard);
router.get('/profile', controllers.getProfile);
router.get('/relationships', controllers.getRelationsips);

module.exports = router;

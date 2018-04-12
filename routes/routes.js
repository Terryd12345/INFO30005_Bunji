const express = require('express');
const homeController = require('../controller/controllers.js');
const router = express.Router();


router.get('/skills', controllers.getSkills);
router.get('/', controllers.getHome);



module.exports = router;

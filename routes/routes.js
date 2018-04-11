const express = require('express');
<<<<<<< HEAD
const homeController = require('../controllers/homeController');
const router = express.Router();

router.get('/', homeController.getHome);
=======
const controller = require('../controller/homeController');
const router = express.Router();

router.get('/', controller.getHome);
>>>>>>> 05852b35db7422509c442ad856eaeb98321de500

module.exports = router;

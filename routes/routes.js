const express = require('express');
const controller = require('../controller/homeController');
const router = express.Router();

router.get('/', controller.getHome);

module.exports = router;

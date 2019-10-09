const express = require('express');
const indexController = require('../controllers/homeController');
const router = express.Router();

router.get('/', indexController);

module.exports = router;

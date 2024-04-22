const express = require('express');
const errorController = require('../controllers/error');

const router = express.Router();

router.use('*', errorController.getNotFoundPage);

module.exports = router;
const express = require('express');
const userAuthController = require('../controllers/userAuthController');
const router = express.Router();

router.post('/register', userAuthController.register);
router.post('/login', userAuthController.login);

module.exports = router;
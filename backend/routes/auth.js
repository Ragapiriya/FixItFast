const express = require('express');
const { getProfile, login } = require('../controllers/authController');
const router =express();


router.route('/profile').get(getProfile);
router.route('/login').post(login);

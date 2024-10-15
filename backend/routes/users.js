const express = require('express');
const { getAllusers } = require('../controllers/userController');
const router = express();

//ADMIN
router.route('/admin/users').get(getAllusers);

module.exports = router;

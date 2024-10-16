const express = require('express');
const { getAllusers, createNewUser } = require('../controllers/userController');
const router = express();

//ADMIN
router.route('/admin/users').get(getAllusers);
router.route('/user/new').post(createNewUser);

module.exports = router;

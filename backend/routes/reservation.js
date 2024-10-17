const express = require('express');
const { getReservations, deleteReservation, getAllreservations } = require('../controllers/reservationController');
const router =express();
 

router.route('/reservations/:userName').get(getReservations);
router.route('/reservation/:id').delete(deleteReservation);

//Admin
router.route('/admin/reservations').get(getAllreservations);


module.exports = router; 
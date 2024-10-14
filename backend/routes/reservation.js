const express = require('express');
const { getReservations, newReservation, deleteReservation } = require('../controllers/reservationController');
const router =express();
 

router.route('/reservations/:userName').get(getReservations);
router.route('/reservation/new').post(newReservation);
router.route('/reservation/:id').delete(deleteReservation);

module.exports = router; 
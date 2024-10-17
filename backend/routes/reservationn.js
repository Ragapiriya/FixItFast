const express = require("express");
const { newReservation } = require("../controllers/reservationController");
const router = express();

router.route("/reservation/new").post(newReservation);
module.exports = router; 

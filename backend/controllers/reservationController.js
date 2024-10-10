const reservationModel = require('../models/reservationModel');
// const ErrorHandler = require('../utils/errorHandler');
// const catchAsyncError = require('../middlewares/catchAsyncError');


//get reservations - /api/v1/reservations
exports.getReservations = async (req,res,next) =>{


    const reservations = await reservationModel.find();
    res.status(200).json({
        success:true,
        count:reservations.length,
        reservations
    });

 ;
};

//create reservation - /api/v1/reservation/new
exports.newReservation = async (req,res,next) =>{
    // req.body.user = req.user.id;
    const reservation = await reservationModel.create(req.body);
    res.status(201).json({
      success: true,
      reservation: reservation,
    });
}

//delete reservation - /api/v1/reservation/:id
exports.deleteReservation = async (req, res, next) => {
    try {
      const reservation = await reservationModel.findByIdAndDelete(req.params.id);
      if (!reservation) {
        return res.status(404).json({
          success: false,
          message: "Reservation not found",
        });
      }
  
    //   await reservation.remove();
      res.status(200).json({
        success: true,
        message: "Reservation deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  

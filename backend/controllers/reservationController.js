const reservationModel = require("../models/reservationModel");
// const ErrorHandler = require('../utils/errorHandler');
// const catchAsyncError = require('../middlewares/catchAsyncError');
const validator = require("validator");
const { generateChecksum } = require("../utils/checkSum");
//get reservations by user - /api/v1/reservations/:userName
exports.getReservations = async (req, res, next) => {
  try {
    const userName = req.params.userName;

    const reservations = await reservationModel
      .find({ userName })
      .sort({ serviceDate: -1, preferredTime: -1 });
    res.status(200).json({
      success: true,
      reservations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch the reservations",
      error: error.message,
    });
  }
};

//create reservation -POST- /api/v1/reservation/new
exports.newReservation = async (req, res, next) => {
  try {
    const {
      vehicleType,
      vehicleRegistrationNo,
      currentMileage,
      preferredDate,
      preferredTime,
      preferredLocation,
      service,
      additionalMessage,
      userName,
    } = req.body;
    let sanitizedMessage = validator.escape(additionalMessage);
    let sanitizedVehicleRegistrationNo = validator.escape(
      vehicleRegistrationNo
    );
    let sanitizedCurrentMileage = validator.escape(currentMileage);
    const newReservation = {
      vehicleType,
      vehicleRegistrationNo: sanitizedVehicleRegistrationNo,
      currentMileage: sanitizedCurrentMileage,
      preferredDate,
      preferredTime,
      preferredLocation,
      service,
      additionalMessage: sanitizedMessage,
      userName,
    };
    const checksum = generateChecksum(newReservation);
    const reservation = await reservationModel.create({
      ...newReservation,
      checksum,
    });

    res.status(201).json({
      success: true,
      reservation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//delete reservation - /api/v1/reservation/:id
exports.deleteReservation = async (req, res, next) => {
  try {
    const id = req.params.id;
    const reservation = await reservationModel.findByIdAndDelete(id);
    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Reservation deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete reservation.",
      error: error.message,
    });
  }
};

//ADMIN
//get all reservations details - /api/v1/admin/reservations
// exports.getAllreservations = async (req, res, next) => {
//   try {
//     const reservations = await reservationModel
//       .find()
//       .sort({ preferredDate: -1, preferredTime: -1 });
//     res.status(200).json({
//       success: true,
//       count: reservations.length,
//       reservations,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch the reservations",
//       error: error.message,
//     });
//   }
// };

//ADMIN
//get all reservations details - /api/v1/admin/reservations
exports.getAllreservations = async (req, res, next) => {
  try {
    const reservations = await reservationModel
      .find()
      .sort({ preferredDate: -1, preferredTime: -1 });

    // Verify checksums for each reservation
    const invalidReservations = [];
    for (const reservation of reservations) {
      const currentChecksum = generateChecksum(reservation.toObject()); 
      if (currentChecksum !== reservation.checksum) {
        invalidReservations.push(reservation._id); 
      }
    }

    if (invalidReservations.length > 0) {
     
      console.warn('Data integrity violations found for reservations:', invalidReservations);
      
    }

    res.status(200).json({
      success: true,
      count: reservations.length,
      reservations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch the reservations",
      error: error.message,
    });
  }
};
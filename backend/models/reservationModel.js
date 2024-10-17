const mongoose = require("mongoose");
const validator = require("validator");
const autoIncrement = require("mongoose-sequence")(mongoose);

const reservationSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  booking_id: {
    type: Number,
  },

  preferredDate: {
    type: Date,
    required: [true, "Please enter preferred date"],
  },
  preferredTime: {
    type: String,
    required: [true, "Please enter preferred time"],
    enum: {
      values: ["10AM", "11AM", "12PM"],
      message: "Please set correct time ",
    },
  },
  preferredLocation: {
    type: String,
    required: [true, "Please enter preferred location"],
    enum: {
      values: ["Puttalam", "Kegalle", "Kalutara", "Gampaha", "Colombo"],
      message: "Please set correct location ",
    },
  },

  service: {
    type: String,
    required: [true, "Please select service"],
    enum: {
      values: [
        "Air Conditioning Repair",
        "Battery Replacement",
        "Brake Inspection and Repair",
        "Car Wash and Detailing",
        "Engine Diagnostics",
        "Engine Tuning",
        "Exhaust System Repair",
        "Filter Replacement (Air, Fuel, Cabin)",
        "Fluid Check and Refill (Coolant, Brake Fluid, etc.)",
        "Lights and Electrical Repairs",
        "Oil Change",
        "Suspension Repair",
        "Tire Replacement/Rotation",
        "Transmission Repair",
        "Wheel Alignment",
        "Wiper Blade Replacemnt",
      ],
      message: "Please set correct service type",
    },
  },
  charge: {
    type: Number,
  },

  additionalMessage: {
    type: String,
    maxlength: [100, "Words capacity limited to 50 characters"],
  },

  vehicleType: {
    type: String,
    required: [true, "Please choose a vehicle type"],
  },
  vehicleRegistrationNo: {
    type: String,
    required: [true, "Please enter your vehicles registration number"],
  },
  currentMileage: {
    type: Number,
    default: 0,
  },

  checksum: { type: String, required: true },
});
reservationSchema.plugin(autoIncrement, { inc_field: "booking_id" });
const reservationModel = mongoose.model("Reservation", reservationSchema);
module.exports = reservationModel;

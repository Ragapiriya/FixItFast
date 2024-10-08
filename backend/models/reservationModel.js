const mongoose = require("mongoose");
const validator = require("validator");

const reservationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
  },
  serviceDetails: [
    {
      preferredDate: {
        type: Date,
        required: [true, "Please enter preferred date"],
      },
      preferredTime: {
        type: Date,
        required: [true, "Please enter preferred time"],
      },
      preferredLocation: {
        type: String,
        required: [true, "Please enter preferred location"],
      },
      serviceType: [
        {
          service: {
            type: String,
            required: [true, "Please select service"],
            ref: "ServiceType",
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
              message: "Please set correct category",
            },
          },
          charge:
          {
            type:Number,
            required:true,
            ref: "ServiceType",
          }
        },
      ],
      message: {
        type: String,
        maxlength: [50, "Words capacity limited to 50 characters"],
      },
    },
  ],

  vehicleDetails: [
    {
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
    },
  ],
  totalCharge:{
    type:Number,
    required:true
  }
});

const reservationModel = mongoose.model("Reservation", reservationSchema);
module.exports = reservationModel;

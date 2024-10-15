import "./Home.css";
import { toast } from "react-toastify";
import validator from "validator";
import MetaData from "../MetaData";
import axios from "axios";
import React, { Fragment, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const ReservationForm = () => {
  const { user } = useAuth0();
  const initialFormData = {
    vehicleType: "",
    vehicleRegistrationNo: "",
    currentMileage: "",
    preferredDate: "",
    preferredTime: "",
    preferredLocation: "",
    service: "",
    additionalMessage: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let {
      vehicleRegistrationNo,
      currentMileage,
      vehicleType,
      service,
      preferredLocation,
      preferredTime,
      preferredDate,
      additionalMessage,
    } = formData;
    const errors = {};
    if (!vehicleType) errors.vehicleType = "Please select a vehicle type";
    if (!vehicleRegistrationNo)
      errors.vehicleRegistrationNo =
        "Please enter the vehicle registration number";
    if (!currentMileage)
      errors.currentMileage = "Please enter the current mileage";
    if (!/^[A-Z0-9]{1,10}$/.test(vehicleRegistrationNo)) {
      return toast.error("Invalid Vehicle Registration Number");
    }
    if (!/^\d+$/.test(currentMileage)) {
      return toast.error("Current Mileage must be a valid number");
    }
    if (!preferredDate) errors.preferredDate = "Please select a preferred date";
    if (new Date(preferredDate) < new Date()) {
      return toast.error("Preferred date cannot be in the past");
    }
    if (!preferredTime) errors.preferredTime = "Please select a preferred time";
    if (!preferredLocation)
      errors.preferredLocation = "Please select a preferred location";
    if (!service) errors.service = "Please select a service type";
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        toast.error(error, {
          position: "top-center",
        });
      });
      return; // Don't submit the form if there are validation errors
    }
    if (additionalMessage.length > 100) {
      return toast.error("Message is too long");
    }

    console.log("Form Data accepted: ", formData);
    // Sanitize inputs before submission
  vehicleRegistrationNo = validator.escape(vehicleRegistrationNo);
  additionalMessage = validator.escape(additionalMessage);
  currentMileage = validator.escape(additionalMessage);

    const reservationData = {
      ...formData,
      userName: user.nickname,
    };

    try {
      const res = await axios.post(
        "http://localhost:8005/api/v1/reservation/new",
        reservationData
      );
      console.log("Reservation submitted to db", res);
      setFormData(initialFormData);
      toast.success("Created!", {
        position: "top-center",
      });
      // console.log("Toast should appear now!");
    } catch (error) {
      console.log("Error while submitting the reservation ", error.message);
    }
  };

  return (
    <Fragment>
      <MetaData title={"Home"} />
      <form onSubmit={handleSubmit}>
        <h2>Wanna book a new reservation for service?</h2>

        <section>
          <h3>Vehicle Info</h3>
          <div>
            <label>
              Type <span className="required">*</span>
            </label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
            >
              <option value="car">Car</option>
              <option value="van">Van</option>
              <option value="motorbike">Motorbike</option>
            </select>
          </div>

          <div>
            <label>
              Registration Number <span className="required">*</span>
            </label>
            <input
              type="text"
              name="vehicleRegistrationNo"
              value={formData.vehicleRegistrationNo}
              onChange={handleChange}
              placeholder="Enter registration number"
            />
          </div>

          <div>
            <label>
              Current Mileage <span className="required">*</span>
            </label>
            <input
              type="text"
              name="currentMileage"
              value={formData.currentMileage}
              onChange={handleChange}
              placeholder="Enter current mileage"
            />
          </div>
        </section>

        <section>
          <h3>Service Info</h3>

          <div>
            <label>
              Date <span className="required">*</span>
            </label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>
              Preferred Time <span className="required">*</span>
            </label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
            >
              <option value="10AM">10AM</option>
              <option value="11AM">11AM</option>
              <option value="12PM">12PM</option>
            </select>
          </div>

          <div>
            <label>
              Preferred Location <span className="required">*</span>
            </label>
            <select
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleChange}
            >
              <option value="Puttalam">Puttalam</option>
              <option value="Kegalle">Kegalle</option>
              <option value="Kalutara">Kalutara</option>
              <option value="Gampaha">Gampaha</option>
              <option value="Colombo">Colombo</option>
            </select>
          </div>

          <div>
            <label>
              Type of Service <span className="required">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="Air Conditioning Repair">
                Air Conditioning Repair
              </option>
              <option value="Battery Replacement">Battery Replacement</option>
              <option value="Brake Inspection and Repair">
                Brake Inspection and Repair
              </option>
              <option value="Car Wash and Detailing">
                Car Wash and Detailing
              </option>
              <option value="Engine Diagnostics">Engine Diagnostics</option>
              <option value="Engine Tuning">Engine Tuning</option>
              <option value="Exhaust System Repair">
                Exhaust System Repair
              </option>
              <option value="Filter Replacement (Air, Fuel, Cabin)">
                Filter Replacement (Air, Fuel, Cabin)
              </option>
              <option value="Fluid Check and Refill (Coolant, Brake Fluid, etc.)">
                Fluid Check and Refill (Coolant, Brake Fluid, etc.)
              </option>
              <option value="Lights and Electrical Repairs">
                Lights and Electrical Repairs
              </option>
              <option value="Oil Change">Oil Change</option>
              <option value="Suspension Repair">Suspension Repair</option>
              <option value="Tire Replacement/Rotation">
                Tire Replacement/Rotation
              </option>
              <option value="Transmission Repair">Transmission Repair</option>
              <option value="Wheel Alignment">Wheel Alignment</option>
              <option value="Wiper Blade Replacement">
                Wiper Blade Replacement
              </option>
            </select>
          </div>

          <div>
            <label>Additional Message</label>
            <textarea
              name="additionalMessage"
              value={formData.additionalMessage}
              onChange={handleChange}
              placeholder="Enter any additional details"
            />
          </div>
        </section>

        <button type="submit">Book reservation</button>
      </form>
    </Fragment>
  );
};

export default ReservationForm;

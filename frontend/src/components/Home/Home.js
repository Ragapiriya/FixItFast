import "./Home.css";

import MetaData from "../MetaData";

import React, { Fragment, useState } from "react";
const ReservationForm = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    registrationNumber: "",
    currentMileage: "",
    serviceDate: "",
    preferredTime: "",
    preferredLocation: "",
    serviceType: "",
    additionalMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // You can handle the form submission logic here, like sending the data to an API
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
              <option value="">Select Vehicle Type</option>
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
              name="registrationNumber"
              value={formData.registrationNumber}
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
              name="serviceDate"
              value={formData.serviceDate}
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
              <option value="">Select Preferred Time</option>
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
              <option value="">Select Preferred Location</option>
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
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
            >
              <option value="">Select Type of Service</option>
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
        <section>
          <h3>Total Charges</h3>
          <div className="total-charges-table">
            <div className="table-header">
              <div className="header-item">Details</div>
              <div className="header-item">Amount [Rs.]</div>
            </div>
            <div className="table-row">
              <div className="row-item">Service Charge</div>
              <div className="row-item">1000</div>{" "}
            </div>
            <div className="table-row">
              <div className="row-item">Tax</div>
              <div className="row-item">200</div>{" "}
            </div>
            <div className="table-row">
              <div className="row-item">
                {" "}
                <strong>Total Charges</strong>
              </div>
              <div className="row-item">
                <strong>1200</strong>
              </div>{" "}
            </div>
          </div>
        </section>
        <button type="submit">Confirm</button>
      </form>
    </Fragment>
  );
};

export default ReservationForm;

import './Home.css';

import MetaData from "../MetaData";

import React,{Fragment, useState} from "react";
// export default function Home() {
//   return (
//     <Fragment>
//       {" "}
//       <MetaData title={'Home'}/>
//       <h1 id="products_heading">Latest Products</h1>
//       <section id="products" className="container mt-5">
//         <div className="row">
//           <div className="col-sm-12 col-md-6 col-lg-3 my-3">
//             <div className="card p-3 rounded">
//               <img
//                 className="card-img-top mx-auto"
//                 src="./images/products/1.jpg"
//               />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">
//                   <a href="">
//                     OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128 Storage) with
//                     No Cost EMI/Additional Exchange Offers
//                   </a>
//                 </h5>
//                 <div className="ratings mt-auto">
//                   <div className="rating-outer">
//                     <div className="rating-inner"></div>
//                   </div>
//                   <span id="no_of_reviews">(5 Reviews)</span>
//                 </div>
//                 <p className="card-text">$245.67</p>
//                 <a href="#" id="view_btn" className="btn btn-block">
//                   View Details
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-12 col-md-6 col-lg-3 my-3">
//             <div className="card p-3 rounded">
//               <img
//                 className="card-img-top mx-auto"
//                 src="./images/products/2.jpg"
//               />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">
//                   <a href="">
//                     WRISTIO HD, Bluetooth Calling Smart Watch, 15 days battery
//                     life, Water Resistant
//                   </a>
//                 </h5>
//                 <div className="ratings mt-auto">
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star-half-o"></i>
//                   <i className="fa fa-star-o"></i>
//                   <span id="no_of_reviews">(5 Reviews)</span>
//                 </div>
//                 <p className="card-text">$150.32</p>
//                 <a href="#" id="view_btn" className="btn btn-block">
//                   View Details
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-12 col-md-6 col-lg-3 my-3">
//             <div className="card p-3 rounded">
//               <img
//                 className="card-img-top mx-auto"
//                 src="./images/products/3.jpg"
//               />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">
//                   <a href="">
//                     Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB
//                   </a>
//                 </h5>
//                 <div className="ratings mt-auto">
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star-half-o"></i>
//                   <i className="fa fa-star-o"></i>
//                   <span id="no_of_reviews">(5 Reviews)</span>
//                 </div>
//                 <p className="card-text">$440.57</p>
//                 <a href="#" id="view_btn" className="btn btn-block">
//                   View Details
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-12 col-md-6 col-lg-3 my-3">
//             <div className="card p-3 rounded">
//               <img
//                 className="card-img-top mx-auto"
//                 src="./images/products/4.jpg"
//               />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">
//                   <a href="">
//                     PTron Newly Launched Tangent Sports, 60Hrs Playtime
//                   </a>
//                 </h5>
//                 <div className="ratings mt-auto">
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star-half-o"></i>
//                   <i className="fa fa-star-o"></i>
//                   <span id="no_of_reviews">(5 Reviews)</span>
//                 </div>
//                 <p className="card-text">$15.46</p>

//                 <a
//                   type="button"
//                   href="#"
//                   id="view_btn"
//                   className="btn btn-block"
//                 >
//                   View Details
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm-12 col-md-6 col-lg-3 my-3">
//             <div className="card p-3 rounded">
//               <img
//                 className="card-img-top mx-auto"
//                 src="./images/products/5.jpg"
//               />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">
//                   <a href="">Campus Men's Maxico Running Shoes</a>
//                 </h5>
//                 <div className="ratings mt-auto">
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star-half-o"></i>
//                   <i className="fa fa-star-o"></i>
//                   <span id="no_of_reviews">(5 Reviews)</span>
//                 </div>
//                 <p className="card-text">$10.12</p>
//                 <a href="#" id="view_btn" className="btn btn-block">
//                   View Details
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Fragment>
//   );
// }



const ReservationForm = () => {
  const [formData, setFormData] = useState({
    vehicleType: '',
    registrationNumber: '',
    currentMileage: '',
    serviceDate: '',
    preferredTime: '',
    preferredLocation: '',
    serviceType: '',
    additionalMessage: ''
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
    console.log('Form Data Submitted: ', formData);
    // You can handle the form submission logic here, like sending the data to an API
  };

  return (
    <Fragment>
      <MetaData title={'Home'}/>
  <form onSubmit={handleSubmit}>
      <h2>Wanna book a new reservation for service?</h2>

      <section>
        <h3>Vehicle Info</h3>
        <div>
          <label>Type</label>
          <select name="vehicleType" value={formData.vehicleType} onChange={handleChange}>
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="van">Van</option>
            <option value="motorbike">Motorbike</option>
          </select>
        </div>
        
        <div>
          <label>Registration Number</label>
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder="Enter registration number"
          />
        </div>

        <div>
          <label>Current Mileage</label>
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
          <label>Date</label>
          <input
            type="date"
            name="serviceDate"
            value={formData.serviceDate}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Preferred Time</label>
          <select name="preferredTime" value={formData.preferredTime} onChange={handleChange}>
            <option value="">Select Preferred Time</option>
            <option value="10AM">10AM</option>
            <option value="11AM">11AM</option>
            <option value="12PM">12PM</option>
          </select>
        </div>

        <div>
          <label>Preferred Location</label>
          <select name="preferredLocation" value={formData.preferredLocation} onChange={handleChange}>
            <option value="">Select Preferred Location</option>
            <option value="Puttalam">Puttalam</option>
            <option value="Kegalle">Kegalle</option>
            <option value="Kalutara">Kalutara</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Colombo">Colombo</option>
          </select>
        </div>

        <div>
          <label>Type of Service</label>
          <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
            <option value="">Select Type of Service</option>
            <option value="Air Conditioning Repair">Air Conditioning Repair</option>
            <option value="Battery Replacement">Battery Replacement</option>
            <option value="Brake Inspection and Repair">Brake Inspection and Repair</option>
            <option value="Car Wash and Detailing">Car Wash and Detailing</option>
            <option value="Engine Diagnostics">Engine Diagnostics</option>
            <option value="Engine Tuning">Engine Tuning</option>
            <option value="Exhaust System Repair">Exhaust System Repair</option>
            <option value="Filter Replacement (Air, Fuel, Cabin)">Filter Replacement (Air, Fuel, Cabin)</option>
            <option value="Fluid Check and Refill (Coolant, Brake Fluid, etc.)">
              Fluid Check and Refill (Coolant, Brake Fluid, etc.)
            </option>
            <option value="Lights and Electrical Repairs">Lights and Electrical Repairs</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Suspension Repair">Suspension Repair</option>
            <option value="Tire Replacement/Rotation">Tire Replacement/Rotation</option>
            <option value="Transmission Repair">Transmission Repair</option>
            <option value="Wheel Alignment">Wheel Alignment</option>
            <option value="Wiper Blade Replacement">Wiper Blade Replacement</option>
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

      <button type="submit">Proceed</button>
    </form>
    </Fragment>
  
  );
};

export default ReservationForm;

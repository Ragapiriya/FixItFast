// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Reservations = () => {
//     const [reservations, setReservations] = useState([]);

//     useEffect(() => {
//         // Fetch reservations from the database
//         const fetchReservations = async () => {
//             try {
//                 const response = await axios.get('/api/reservations'); // Adjust the endpoint as needed
//                 setReservations(response.data);
//             } catch (error) {
//                 console.error('Error fetching reservations:', error);
//             }
//         };

//         fetchReservations();
//     }, []);

//     const handleDelete = async (booking_id) => {
//         try {
//             await axios.delete(`/api/reservations/${booking_id}`); // Adjust the endpoint as needed
//             setReservations((prev) => prev.filter(reservation => reservation.booking_id !== booking_id));
//         } catch (error) {
//             console.error('Error deleting reservation:', error);
//         }
//     };

//     // Sort reservations by preferredDate and preferredTime in descending order
//     const sortedReservations = reservations.sort((a, b) => {
//         const dateA = new Date(`${a.preferredDate}T${a.preferredTime}`);
//         const dateB = new Date(`${b.preferredDate}T${b.preferredTime}`);
//         return dateB - dateA; // Descending order
//     });

//     return (
//         <div className="reservations-container">
//             <h2 className="reservations-title">Your Reservations</h2>
//             <ul className="reservations-list">
//                 {sortedReservations.map(reservation => (
//                     <li key={reservation.booking_id} className="reservation-item">
//                         <div className="reservation-details">
//                             <p className="reservation-id">Booking ID: {reservation.booking_id}</p>
//                             <p className="reservation-service">Service Type: {reservation.service_type}</p>
//                             <p className="reservation-date">Date: {reservation.preferredDate}</p>
//                             <p className="reservation-time">Time: {reservation.preferredTime}</p>
//                             <p className="reservation-location">Location: {reservation.preferredLocation}</p>
//                             <p className="reservation-charges">Total Charges: ${reservation.total_charges}</p>
//                         </div>
//                         <button
//                             className="cancel-button"
//                             onClick={() => handleDelete(reservation.booking_id)}
//                         >
//                             Cancel Reservation
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Reservations;

// import React, { Fragment, useState } from 'react';
// import './Reservations.css';
// import MetaData from '../MetaData';

// const Reservations = () => {
//     // Sample reservation data
//     const [reservations, setReservations] = useState([
//         {
//             booking_id: '123',
//             service_type: 'Oil Change',
//             preferredDate: '2024-10-15',
//             preferredTime: '14:00',
//             preferredLocation: 'Service Center A',
//             total_charges: 50,
//         },
//         {
//             booking_id: '456',
//             service_type: 'Tire Rotation',
//             preferredDate: '2024-10-10',
//             preferredTime: '10:30',
//             preferredLocation: 'Service Center B',
//             total_charges: 30,
//         },
//         {
//             booking_id: '789',
//             service_type: 'Brake Inspection',
//             preferredDate: '2024-10-05',
//             preferredTime: '09:00',
//             preferredLocation: 'Service Center C',
//             total_charges: 40,
//         },
//         {
//             booking_id: '486',
//             service_type: 'Oil Change',
//             preferredDate: '2024-10-05',
//             preferredTime: '14:00',
//             preferredLocation: 'Service Center A',
//             total_charges: 50,
//         },
//     ]);

//     const handleDelete = (booking_id) => {
//         setReservations((prev) => prev.filter(reservation => reservation.booking_id !== booking_id));
//     };

//     // Sort reservations by preferredDate and preferredTime in descending order
//     const sortedReservations = reservations.sort((a, b) => {
//         const dateA = new Date(`${a.preferredDate}T${a.preferredTime}`);
//         const dateB = new Date(`${b.preferredDate}T${b.preferredTime}`);
//         return dateB - dateA; // Descending order
//     });

//     return (
//         <Fragment>
//             <MetaData title={'Reservations'}/>
//  <div className="reservations-container">
//             <h2 className="reservations-title">Your Reservations</h2>
//             <ul className="reservations-list">
//                 {sortedReservations.map(reservation => (
//                     <li key={reservation.booking_id} className="reservation-item">
//                         <div className="reservation-details">
//                             <p className="reservation-id">Booking ID: {reservation.booking_id}</p>
//                             <p className="reservation-service">Service Type: {reservation.service_type}</p>
//                             <p className="reservation-date">Date: {reservation.preferredDate}</p>
//                             <p className="reservation-time">Time: {reservation.preferredTime}</p>
//                             <p className="reservation-location">Location: {reservation.preferredLocation}</p>
//                             <p className="reservation-charges">Total Charges: ${reservation.total_charges}</p>
//                         </div>
//                         <button
//                             className="cancel-button"
//                             onClick={() => handleDelete(reservation.booking_id)}
//                         >
//                             Cancel Reservation
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//         </Fragment>

//     );
// };

// export default Reservations;

import React, { Fragment, useState } from "react";
import "./Reservations.css";
import MetaData from "../MetaData" ;

const Reservations = () => {
  // Sample reservation data
  const [reservations, setReservations] = useState([
    {
      booking_id: "123",
      service_type: "Oil Change",
      preferredDate: "2024-10-15",
      preferredTime: "14:00",
      preferredLocation: "Service Center A",
      total_charges: 50,
    },
    {
      booking_id: "456",
      service_type: "Tire Rotation",
      preferredDate: "2024-10-10",
      preferredTime: "10:30",
      preferredLocation: "Service Center B",
      total_charges: 30,
    },
    {
      booking_id: "789",
      service_type: "Brake Inspection",
      preferredDate: "2024-10-05",
      preferredTime: "09:00",
      preferredLocation: "Service Center C",
      total_charges: 40,
    },
    {
        booking_id: "100",
        service_type: "Brake Inspection",
        preferredDate: "2024-10-04",
        preferredTime: "09:00",
        preferredLocation: "Service Center C",
        total_charges: 40,
      }, {
        booking_id: "200",
        service_type: "Brake Inspection",
        preferredDate: "2024-10-03",
        preferredTime: "09:00",
        preferredLocation: "Service Center C",
        total_charges: 40,
      },
  ]);

  const handleDelete = (booking_id) => {
    setReservations((prev) =>
      prev.filter((reservation) => reservation.booking_id !== booking_id)
    );
  };

  // Sort reservations by preferredDate and preferredTime in descending order
  const sortedReservations = reservations.sort((a, b) => {
    const dateA = new Date(`${a.preferredDate}T${a.preferredTime}`);
    const dateB = new Date(`${b.preferredDate}T${b.preferredTime}`);
    return dateB - dateA; // Descending order
  });

  // Get current date and time
  const currentDateTime = new Date();

  return (
    <Fragment>
      <MetaData title={"Reservations"} />
      <div className="reservations-container">
        <h2 className="reservations-title">Your Reservations</h2>
        <img alt="Reservation-image" className="reservations-img" src="./images/reservations.png"/>
        <ul className="reservations-list">
          {sortedReservations.map((reservation) => {
            const reservationDateTime = new Date(
              `${reservation.preferredDate}T${reservation.preferredTime}`
            );
            const isUpcoming = reservationDateTime > currentDateTime; // Check if reservation is upcoming

            return (
              <li key={reservation.booking_id} className="reservation-item">
                <div className="reservation-details">
                  <p className="reservation-id">
                    Booking ID: {reservation.booking_id}
                  </p>
                  <p className="reservation-service">
                    Service Type: {reservation.service_type}
                  </p>
                  <p className="reservation-date">
                    Date: {reservation.preferredDate}
                  </p>
                  <p className="reservation-time">
                    Time: {reservation.preferredTime}
                  </p>
                  <p className="reservation-location">
                    Location: {reservation.preferredLocation}
                  </p>
                  <p className="reservation-charges">
                    Total Charges: ${reservation.total_charges}
                  </p>
                </div>
                {isUpcoming ? (
                  <button
                    className="cancel-button"
                    onClick={() => handleDelete(reservation.booking_id)}
                  >
                    Cancel Reservation
                  </button>
                ):(
                    <button
                        className="remove-history-button"
                        onClick={() => handleDelete(reservation.booking_id)}
                    >
                        Remove History
                    </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Reservations;

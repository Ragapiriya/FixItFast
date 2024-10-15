// import React, { useState, useEffect } from "react";
// import axios from "axios";
import './AdminReservation.css';
const AdminReservations = () => {
//   const [reservations, setReservations] = useState([]);
//   const [upcomingCount, setUpcomingCount] = useState(0);

  //   useEffect(() => {
  //     axios
  //       .get("/api/reservations")
  //       .then((response) => {
  //         setReservations(response.data);
  //         const upcoming = response.data.filter(
  //           (res) => new Date(res.date) > new Date()
  //         );
  //         setUpcomingCount(upcoming.length);
  //       })
  //       .catch((error) => console.error("Error fetching reservations: ", error));
  //   }, []);

  return (
    <div className="admin-reservations-container">
      {/* <h2>Total Upcoming Reservations: {upcomingCount}</h2> */}
      <h2>Total Upcoming Reservations: 10</h2>

      <table className="reservations-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>User</th>
            <th>Service</th>
            <th>Status</th>
          </tr>
        </thead>
        {/* <tbody>
          {reservations.map((res) => (
            <tr key={res._id}>
              <td>{res.date}</td>
              <td>{res.time}</td>
              <td>{res.user}</td>
              <td>{res.serviceType}</td>
              <td>{res.status}</td>
            </tr>
          ))}
        </tbody> */}
        <tbody>
          <tr>
            <td>Sample</td>
            <td>Sample</td>
            <td>Sample</td>
            <td>Sample</td>
            <td>Sample</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminReservations;

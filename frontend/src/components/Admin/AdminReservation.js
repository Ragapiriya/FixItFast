import React, { Fragment, useEffect, useState } from "react";
import "./AdminReservation.css";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllreservations } from "../../actions/reservationsActions";
import Loader from "../layouts/Loader";

const AdminReservations =  () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [upcomingResCount, setupcomingResCount] = useState(0);
  const dispatch = useDispatch();
  const { reservations, loading } = useSelector(
    (state) => state.reservationsState
  );
  
  useEffect(() => {
    const getReservation = async () => {
      if (isAuthenticated) {
        // dispatch(getAllreservations);
        const token = await getAccessTokenSilently();
        console.log(token);
        // getAllreservations(dispatch, token);
        dispatch(getAllreservations(token));
      }
    };
    getReservation();
  }, [isAuthenticated,getAccessTokenSilently, dispatch]);
  useEffect(() => {
    const currentDateTime = new Date();
    if (reservations && reservations.length > 0) {
      const count = reservations.filter((reservation) => {
        const reservationDateTime = new Date(reservation.preferredDate);
        return reservationDateTime > currentDateTime;
      }).length;
      setupcomingResCount(count);
    }
  }, [reservations]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="admin-reservations-container">
          <h2>Total Upcoming Reservations: {upcomingResCount}</h2>

          <table className="reservations-table">
            <thead>
              <tr>
                <th>Booking id</th>
                <th>Date</th>
                <th>Time</th>
                <th>District</th>
                <th>User</th>
                <th>Service</th>
                <th>Message</th>
                <th>Veh_Reg_No</th>
                <th>Mileage</th>
              </tr>
            </thead>
            <tbody>
              {reservations &&
                reservations
                  .slice() // To avoid mutating the original state
                  .sort((a, b) => a.booking_id - b.booking_id)
                  .map((reservation) => (
                    <tr key={reservation.booking_id}>
                      <td>{reservation.booking_id}</td>
                      <td>{reservation.preferredDate}</td>
                      <td>{reservation.preferredTime}</td>
                      <td>{reservation.preferredLocation}</td>
                      <td>{reservation.userName}</td>
                      <td>{reservation.service}</td>
                      <td>{reservation.additionalMessage}</td>
                      <td>{reservation.vehicleRegistrationNo}</td>
                      <td>{reservation.currentMileage}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      )}
    </Fragment>
  );
};

export default AdminReservations;

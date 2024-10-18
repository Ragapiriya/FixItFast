import React, { Fragment, useEffect } from "react";
import "./Reservations.css";
import MetaData from "../MetaData";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReservation,
  getReservations,
} from "../../actions/reservationsActions";
import Loader from "../layouts/Loader";
import { toast } from "react-toastify";

const Reservations = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const currentDateTime = new Date();
  const dispatch = useDispatch();
  const { reservations, loading } = useSelector(
    (state) => state.reservationsState
  );

  useEffect(() => {
    const getReservation = async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        console.log(token);
        getReservations(dispatch, token, user.nickname);
      }
    };
    getReservation();
  }, [getAccessTokenSilently, dispatch, isAuthenticated, user]);

  const convertTo24HourFormat = (time) => {
    const [hour, minute] = time.match(/(\d+)([APM]+)/);
    let hour24 = parseInt(hour, 10);

    if (minute === "PM" && hour24 < 12) {
      hour24 += 12; // Convert PM to 24-hour format
    }
    if (minute === "AM" && hour24 === 12) {
      hour24 = 0; // Midnight case
    }

    return hour24.toString().padStart(2, "0") + ":00"; // Return HH:MM format
  };
  const sortedReservations = (
    Array.isArray(reservations) ? [...reservations] : []
  ).sort((a, b) => {
    // Convert preferred time to 24-hour format
    const timeA = convertTo24HourFormat(a.preferredTime);
    const timeB = convertTo24HourFormat(b.preferredTime);

    // Combine preferredDate with converted preferredTime
    const dateTimeA = new Date(`${a.preferredDate.split("T")[0]}T${timeA}`);
    const dateTimeB = new Date(`${b.preferredDate.split("T")[0]}T${timeB}`);

    // Handle invalid dates (optional)
    if (isNaN(dateTimeA) || isNaN(dateTimeB)) {
      return 0; // Treat invalid dates as equal
    }

    return dateTimeB - dateTimeA; // Descending order
  });
  const handleDelete = async (reservationId) => {
    try {
      const token = await getAccessTokenSilently();
      deleteReservation(dispatch, token, reservationId, user.nickname);
      toast.success("Deleted!", {
        position: "top-center",
      });
    } catch (error) {
      // console.error("Error deleting reservation:", error);
      toast.error("Failed to delete!", {
        position: "top-center",
      });
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Reservations"} />
          <div className="reservations-container">
            <h2 className="reservations-title">Your Reservations</h2>
            <img
              alt="Reservation-image"
              className="reservations-img"
              src="./images/reservations.png"
            />
            {isAuthenticated ? (
              <ul className="reservations-list">
                {sortedReservations &&
                  sortedReservations.map((reservation) => {
                    const reservationDateTime = new Date(
                      `${reservation.preferredDate}`
                    );
                    const isUpcoming = reservationDateTime > currentDateTime; // Check if reservation is upcoming

                    return (
                      <li
                        key={reservation.booking_id}
                        className="reservation-item"
                      >
                        <div className="reservation-details">
                          <p className="reservation-id">
                            Booking ID: {reservation.booking_id}
                          </p>
                          <p className="reservation-service">
                            Service Type: {reservation.service}
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
                          {/* <p className="reservation-charges">
                    Total Charges: ${reservation.total_charges}
                  </p> */}
                        </div>
                        {isUpcoming ? (
                          <button
                            className="cancel-button"
                            onClick={() => handleDelete(reservation._id)}
                          >
                            Cancel Reservation
                          </button>
                        ) : (
                          <button
                            className="remove-history-button"
                            onClick={() => handleDelete(reservation._id)}
                          >
                            Remove History
                          </button>
                        )}
                      </li>
                    );
                  })}
              </ul>
            ) : (
              <h3 style={{ textAlign: "center" }}>
                Log in to view your reservations
              </h3>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Reservations;

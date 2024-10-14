import React, { Fragment, useEffect, useState } from "react";
import "./Reservations.css";
import MetaData from "../MetaData";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const { user, isLoading, error, isAuthenticated } = useAuth0();
  const currentDateTime = new Date();

  useEffect(() => {
    if (isAuthenticated) {
      if (isLoading) {
        return <p>Loading User Data ...</p>;
      }
      if (error) {
        return <p>Error Loading user data : {error.message}</p>;
      }
      if (!user) {
        return <p>Please log in !!!</p>;
      }
      const fetchReservations = async () => {
        try {
          const res = await axios.get(
            `http://localhost:8005/api/v1/reservations/${user.nickname}`
          );
          setReservations(res.data.reservations);
        } catch (error) {
          console.log("Error while fetching reservations ", error.message);
        }
      };

      fetchReservations();
    }
  },[isAuthenticated]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8005/api/v1/reservation/${id}`
      );
      if (res.data.success) {
        setReservations((prev) =>
          prev.filter((reservation) => reservation._id !== id)
        );
        console.log("Deletion successful");
      } else {
        console.log("Deletion not successful");
      }
    } catch (error) {
      console.log("Error while deleting reservation ", error.message);
    }
  };
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
  // Sort reservations by preferredDate and preferredTime in descending order
  const sortedReservations = reservations.sort((a, b) => {
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

  return (
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
            {sortedReservations.length === 0 ? (
              <h3 style={{ textAlign: "center" }}>
                You have made no reservations yet
              </h3>
            ) : (
              sortedReservations.map((reservation) => {
                const reservationDateTime = new Date(
                  `${reservation.preferredDate}`
                );
                const isUpcoming = reservationDateTime > currentDateTime; // Check if reservation is upcoming

                return (
                  <li key={reservation.booking_id} className="reservation-item">
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
              })
            )}
          </ul>
        ) : (
          <h3 style={{textAlign:"center"}}>Log in to view your reservations</h3>
        )}
      </div>
    </Fragment>
  );
};

export default Reservations;

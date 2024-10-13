import React, { Fragment, useEffect, useState } from "react";
import "./Profile.css";
import MetaData from "../MetaData";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Profile = () => {
  const {  isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [user, setUser] = useState({
    userName: "",
    name: "",
    email: "",
    contactNumber: "",
    country: "",
    picture: "",
  });

  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const [country, setCountry] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const checkFirstLogin = async () => {
    if (isAuthenticated) {
      try {
        const response = await axios.post("http://localhost:3001/api/user", {
          ...user,
          contactNumber,
          country,
          
        });
        if (response.data.message === "First Time Login, user saved") {
          setIsFirstLogin(true);
          setShowPopup(true);
        }
      } catch (error) {
        console.error("Error checking user status:", error);
      }
    }
  };
  const handleSave = async () => {
    try {
      await axios.put("http://localhost:3001/api/user", {
        contactNumber,
        country,
      });

      setShowPopup(false);
    } catch (error) {
      console.log("Error saving user data", error);
    }
  };

  useEffect(() => {
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUser(JSON.parse(storedUserInfo));
    }
    checkFirstLogin();
  }, [isAuthenticated, user]);






  return (
    <Fragment>
      <MetaData title={user.name || Profile} />

      <div
        className="profile-container"
        style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}
      >
        <h1 className="profile-heading">Profile</h1>
        <img
          alt="userProfile"
          src={user.picture || "./images/profile.jpg"}
          className="profile-img"
        />
        <div className="profile-detail">
          <div style={{ marginBottom: "20px" }}>
            <strong>UserName:</strong>{" "}
            {user.nickname || user.email.split("@")[0]}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <strong>Name:</strong> {user.name}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <strong>Email:</strong> {user.email}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <strong>Contact Number:</strong> {user.contactNumber || "N/A"}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <strong>District:</strong> {user.district || "N/A"}
          </div>
        </div>
      </div>
      {showPopup && (
        <div>
          <h1>Welcome, {user.name}</h1>
          <div className="popup">
            <h2>Complete Your Profile</h2>
            <label>Contact Number</label>
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <label>Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Profile;

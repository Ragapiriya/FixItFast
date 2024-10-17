import React, { Fragment, useEffect, useState } from "react";
import "./Profile.css";
import MetaData from "../MetaData";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";

const Profile = () => {
  const { isAuthenticated } = useAuth0();
  const [user, setUser] = useState({
    userName: "",
    name: "",
    email: "",
    country: "",
    picture: "",
  });
console.log(user)
  // const [isFirstLogin, setIsFirstLogin] = useState(false);
  // const [contactNumber, setContactNumber] = useState("");
  // const [country, setCountry] = useState("");
  // const [showPopup, setShowPopup] = useState(false);

  // const checkFirstLogin = async () => {
  //   if (isAuthenticated) {
  //     try {
  //       const response = await axios.post("http://localhost:3001/api/user", {
  //         ...user,
  //         contactNumber,
  //         country,
  //       });
  //       if (response.data.message === "First Time Login, user saved") {
  //         setIsFirstLogin(true);
  //         setShowPopup(true);
  //       }
  //     } catch (error) {
  //       console.error("Error checking user status:", error);
  //     }
  //   }
  // };
  // const handleSave = async () => {
  //   try {
  //     await axios.put("http://localhost:3001/api/user", {
  //       contactNumber,
  //       country,
  //     });

  //     setShowPopup(false);
  //   } catch (error) {
  //     console.log("Error saving user data", error);
  //   }
  // };

  useEffect(() => {
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUser(JSON.parse(storedUserInfo));
    }
    // checkFirstLogin();
  }, [isAuthenticated]);

  return (
    <Fragment>
      <MetaData title={user.nickname || Profile} />

      <div
        className="profile-container"
        style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}
      >
        <h1 className="profile-heading">Profile</h1>
        <img
          alt="userProfile"
          src={user.picture}
          className="profile-img"
        />
        <div className="profile-detail" style={{ marginTop:"20px"}}>
          <div style={{ marginBottom: "20px",textAlign:"center" }}>
            <strong>UserName:</strong>{" "}
            {user.nickname || user.email.split("@")[0]}
          </div>
          <div style={{ marginBottom: "20px",textAlign:"center" }}>
            <strong>Name:</strong> {user.name}
          </div>
          <div style={{ marginBottom: "20px",textAlign:"center" }}>
            <strong>Email:</strong> {user.email}
          </div>
          {/* <div style={{ marginBottom: "20px" }}>
            <strong>Contact Number:</strong> {user.contactNumber}
          </div> */}
          <div style={{ marginBottom: "20px",textAlign:"center" }}>
            <strong>Country:</strong> Sri Lanka
          </div>
        </div>
      </div>
      {/* {showPopup && (
        <div>
          
          <div className="popup">
          <h3 style={{ textAlign: "center" }}>Welcome<br></br> {user.nickname}!</h3>
            <h5 style={{ textAlign: "center" }}>Complete Your Profile</h5>
            <br></br>
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
      )} */}
    </Fragment>
  );
};

export default Profile;

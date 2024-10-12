import React, { Fragment, useState } from "react";
import "./Profile.css";
import MetaData from "../MetaData";

const Profile = () => {
  // Sample user data
  const [user, setUser] = useState({
    userName: "johndoe123",
    name: "John Doe",
    email: "johndoe@example.com",
    contactNumber: "+1234567890",
    district: "Central District",
  }); 

  const handleEdit = () => {
    alert("Edit functionality not implemented yet!");
  };
 
  return (
    <Fragment>
      <MetaData title={user.name} />

      <div
       className="profile-container"
        style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}
      >
        <h1 className="profile-heading">Profile</h1>
        <img alt="userProfile" src="./images/profile.jpg" className="profile-img"/>
        <div className="profile-detail">
          <div style={{ marginBottom: "20px" }}>
            <strong>UserName:</strong> {user.userName}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <strong>Name:</strong> {user.name}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <strong>Email:</strong> {user.email}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <strong>Contact Number:</strong> {user.contactNumber}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <strong>District:</strong> {user.district}
          </div>
        </div>

        <button
          className="edit-button"
          onClick={handleEdit}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Edit
        </button>
      </div>
    </Fragment>
  );
};

export default Profile;

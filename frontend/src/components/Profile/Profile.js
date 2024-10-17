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
  // console.log(user);

  useEffect(() => {
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      try {
        setUser(JSON.parse(storedUserInfo));
      } catch (error) {
        console.error("Error parsing userInfo from sessionStorage:", error);
      }
    } else {
      console.warn("No userInfo found in sessionStorage");
    }
  }, [isAuthenticated]);

  return (
    <Fragment>
      <MetaData title={user.nickname || Profile} />

      <div
        className="profile-container"
        style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}
      >
        <h1 className="profile-heading">Profile</h1>
        <img alt="userProfile" src={user.picture} className="profile-img" />
        <div className="profile-detail" style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <strong>UserName:</strong>{" "}
            {user.nickname || user.email.split("@")[0]}
          </div>
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <strong>Name:</strong> {user.name}
          </div>
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <strong>Email:</strong> {user.email}
          </div>
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <strong>Country:</strong> Sri Lanka
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;

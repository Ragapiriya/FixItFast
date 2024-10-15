import "./AdminUsers.css";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllusers } from "../../actions/usersActions.js";
import Loader from "../layouts/Loader";

const AdminUsers = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.usersState);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAllusers);
    }
  }, [isAuthenticated, dispatch]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="admin-users-container">
          <h2>All Registered Users</h2>
          <table className="users-table">
            <thead>
              <tr>
                <th>UserName</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created at</th>
              </tr>
            </thead>
            {/* <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.contactNumber}</td>
                            <td>{user.country}</td>
                            <td>{new Date(user.registrationDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody> */}
            <tbody>
              {users && users.map((user)=>(

              <tr key={user._id}>
                <td>{user.userName}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Fragment>
  );
};

export default AdminUsers;

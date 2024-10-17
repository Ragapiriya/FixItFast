import "./AdminUsers.css";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllusers } from "../../actions/usersActions.js";
import Loader from "../layouts/Loader";

const AdminUsers = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.usersState);

  useEffect(() => {
    const getUsers = async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        console.log("User side token", token);
        dispatch(getAllusers(token));
      }
    };
    getUsers();
  }, [isAuthenticated, dispatch, getAccessTokenSilently]);
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

            <tbody>
              {users &&
                users.map((user) => (
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

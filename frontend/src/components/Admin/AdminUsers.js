// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './AdminUsers.css';
const AdminUsers = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //     // Fetch all users from the backend
  //     axios.get('/api/users')
  //         .then(response => setUsers(response.data))
  //         .catch(error => console.error("Error fetching users: ", error));
  // }, []);

  return (
    <div className="admin-users-container">
      <h2>All Registered Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Country</th>
            <th>Registration Date</th>
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
          <tr>
            <td>sample</td>
            <td>sample</td>
            <td>sample</td>
            <td>sample</td>
            <td>sample</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;

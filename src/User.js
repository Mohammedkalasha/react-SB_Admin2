import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    setUser([
      {
        id: 1,
        username: "raja",
        email: "raja@gmail.com",
        country: "India",
        state: "Tamil Nadu",
        city: "Chennai",
        phone: "9783254617",
        dob: "12/1/2001",
        gender: "Male",
      },
      {
        id: 2,
        username: "merry",
        email: "merry@gmail.com",
        country: "America",
        state: "Calfornia",
        city: "Los Angela",
        phone: "678532546",
        dob: "15/2/1996",
        gender: "Female",
      },
    ]);
  });

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to={"/create-user"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fa fa-user-plus" aria-hidden="true"></i> Create User
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Users Details</h6>
          <div className="card-body">
            <div className="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Phone No</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Action </th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Phone No</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((user) => {
                    return (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.country}</td>
                        <td>{user.state}</td>
                        <td>{user.city}</td>
                        <td>{user.phone}</td>
                        <td>{user.dob}</td>
                        <td>{user.gender}</td>
                        <td>
                          <Link
                            to={`/edit-user/${user.id}`}
                            className="btn btn-info btn-sm mr-2 "
                          >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                            Edit User
                          </Link>
                          <Link
                            to={`/profile/${user.id}`}
                            className="btn btn-success btn-sm mr-2"
                          >
                            Profile
                          </Link>
                          <Link
                            to={`/edit-profile/${user.id}`}
                            className="btn btn-primary btn-sm mr-2"
                          >
                            Edit Profile
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;

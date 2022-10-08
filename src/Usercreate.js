import React from "react";
import { Link } from "react-router-dom";
function Usercreate() {
  return (
    <div className="container">
      <div>
        <h2>Create User Form</h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label>UserName</label>
            <input type={"text"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label>Email</label>
            <input type={"email"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>Country</label>
            <select className="form-control">
              <option>America</option>
              <option>Australia</option>
              <option>Bangladesh</option>
              <option>Brazil</option>
              <option>China</option>
              <option>India</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>State</label>
            <select className="form-control">
              <option>Tamil Nadu</option>
              <option>Telagana</option>
              <option>Gujarat</option>
              <option> Alaska</option>
              <option>California</option>
              <option>Abu Dhabi</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>City</label>
            <select className="form-control">
              <option>Chennai</option>
              <option>Hyderbad</option>
              <option>Mumbai</option>
              <option>Los Angeles</option>
              <option>Dubai</option>
              <option>Abu Dhabi</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>Phone No</label>
            <input type={"tel"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>Date of Birth</label>
            <input type={"date"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>Gender</label>
            <select className="form-control">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <Link to={"/user"} className="btn btn-primary">
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usercreate;

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddStudent() {
  let navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const { firstName, lastName, email, department } = student;

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(student);
    await axios.post("http://localhost:9192/students", student);
    navigate("/view-students");
  };

  return (
    <div class="col-sm-8 py-2 px-5 offset-2 shadow mt-5">
      <h2 className="mt-5">Add Student</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div class="input-group mb-5">
          <label className="input-group-text" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => onInputChange(e)}
            required
          />
        </div>
        <div class="input-group mb-5">
          <label className="input-group-text" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => onInputChange(e)}
            required
          />
        </div>
        <div class="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            required
          />
        </div>
        <div class="input-group mb-5">
          <label className="input-group-text" htmlFor="department">
            Department
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="department"
            id="department"
            value={department}
            onChange={(e) => onInputChange(e)}
            required
          />
        </div>
        <button
          onClick={onSubmit}
          type="submit"
          className="btn btn-primary mb-4 "
        >
          Add Student
        </button>
      </form>
    </div>
  );
}

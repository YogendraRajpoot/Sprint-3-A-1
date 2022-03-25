import React, { useState } from "react";

export const Form = () => {
  const [formData, setformData] = useState({
    username: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    isMarried: false,
  });

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setformData({ ...formData, [id]: type === "checkbox" ? checked : value });
  };
  const { username, age, isMarried, department, salary, address } = formData;

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(formData );
    
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <h1>Form</h1>
        <input
          id="username"
          type="text"
          placeholder="Enter Name"
          onChange={handleChange}
          value={username}
        />
        <br />
        <input
          id="age"
          type="number"
          placeholder="Enter Age"
          onChange={handleChange}
          value={age}
        />
        <br />
        <input
          id="address"
          type="text"
          placeholder="Enter Address"
          onChange={handleChange}
          value={address}
        />
        <br />
        <label>
          Department :-
          <select
            name=""
            onChange={handleChange}
            id="department"
            value={department}
          >
            <option value="">Select</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="management">Management</option>
            <option value="finance">Finance</option>
          </select>
        </label>
        <br />
        <input
          id="salary"
          type="number"
          placeholder="Enter salary"
          onChange={handleChange}
          value={salary}
        />
        <br />
        <label>
          Marital State :-
          <input type="checkbox" onChange={handleChange} id="isMarried" />
        </label>
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

import React, { useEffect, useState } from "react";
import { FormList } from "./FormList";

export const Form = () => {
  const [data, setData] = useState([]);
  const [formData, setformData] = useState({
    username: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    isMarried: false,
  });

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    fetch(`http://localhost:3001/formdata`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(data);
      });
  };

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setformData({ ...formData, [id]: type === "checkbox" ? checked : value });
  };
  const { username, age, department, salary, address } = formData;

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(formData );
    fetch("http://localhost:3001/formData", {
      method: "Post",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" },
    }).then((res) => getTodo());
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <h1>Form</h1>
        Name:-
        <input
          id="username"
          type="text"
          placeholder="Enter Name"
          onChange={handleChange}
          value={username}
        />
        <br />
        Age:-
        <input
          id="age"
          type="number"
          placeholder="Enter Age"
          onChange={handleChange}
          value={age}
        />
        <br />
        Address:-
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
        Salary:-
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
        <br />
        <input type="submit" value="submit" />
        <br />
        <br />
      </form>
      <div>
        <FormList data={data}/>
      </div>
    </>
  );
};

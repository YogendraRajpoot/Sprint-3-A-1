import React from "react";
import style from "./FormList.module.css";

export const FormList = ({ data }) => {
    
  return (
    <div className={style.component}>
      <h1>FormList</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital State</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item ) => {
            return <tr key={item.id}>
                <td>{item.username}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
                <td>{item.department}</td>
                <td>{item.salary}</td>
                <td>{item.isMarried?"Yes":"No"}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

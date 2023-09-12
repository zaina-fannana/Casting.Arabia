import React, { useState } from "react";
import "./Review.css";

function Review() {
  const [selectedData, setSelectedData] = useState({
    Opportunities: "All",
    Roles: "All",
    Status: "All",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-center gap-6"
      style={{
        display: "flex",
        direction: "ltr",
        textAlign: "center",
        justifyContent: "center",
        position: "relative",
        minHeight: "73vh",
        alignItems: "center",
      }}
    >
      <div className="sm:w-56 w-full">
        <DropDownList
          options={[
            "All",
            "A professional oud player is required to participate in a show",
          ]}
          label="Opportunities"
          name="Opportunities"
          value={selectedData.Opportunities}
          onChange={handleInputChange}
        />
      </div>
      <div className="sm:w-56 w-full">
        <DropDownList
          options={["All", "instrumentalist"]}
          label="Roles"
          name="Roles"
          value={selectedData.Roles}
          onChange={handleInputChange}
        />
      </div>
      <div className="sm:w-56 w-full">
        <DropDownList
          options={[
            "All",
            "Connected",
            "Archived",
            "Pending",
            "Scheduled",
            "Hired",
            "Rejected",
          ]}
          value={selectedData.Status}
          onChange={handleInputChange}
          label="Status"
          name="Status"
        />
      </div>
    </div>
  );
}

function DropDownList({ options, label, name, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Review;

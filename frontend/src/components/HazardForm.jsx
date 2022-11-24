import React, { useState } from "react";

const HazardForm = () => {
  const [hazardName, setHazardName] = useState("");
  const [hazardDescription, setHazardDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const hazard = {
        hazardName,
        hazardDescription,
    };
    const response = await fetch("/api/hazard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hazard),
    });
    const newHazard = await response.json();
    console.log(newHazard);
  };
  console.log(hazardName);
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hazard Name:
        <input onChange={(event) => setHazardName(event.target.value)} value={hazardName} />
      </label>
      <label>
        Hazard Description:
        <input
          onChange={(event) => setHazardDescription(event.target.value)}
          value={hazardDescription}
        />
      </label>
      <button type="submit">Add Hazard</button>
    </form>
  );
};

export default HazardForm;
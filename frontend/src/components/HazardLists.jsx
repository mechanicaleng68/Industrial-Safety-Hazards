import React, { useEffect, useState } from "react";
const HazardDetail = (props) => {
  const { hazardName, hazardDescription, hazardPostalCode, hazardDate, hazardLocation } = hazard;
  return (
    <div>
      <p>Hazard Name:</p>
      <p>{hazardName}</p>
      <p>Hazard Description:</p>
      <p>{hazardDescription}</p>
      <p>Hazard Postal Code:</p>
      <ul>
        {hazardPostalCode.map((power) => {
          return <li key={hazardPostalCode}>{hazardPostalCode}</li>;
        })}
      </ul>
      <p>{hazardDate}</p>
      <p>Location:</p>
      {!hazardLocation ? (
        <p>Unknown</p>
      ) : (
        <div>
          <p>City:</p>
          <p>{hazardLocation.city}</p>
          <p>Province:</p>
          <p>{hazardLocation.province}</p>
          <p>Country:</p>
          <p>{hazardLocation.country}</p>
        </div>
      )}
    </div>
  );
};
const HazardList = () => {
  const [hazards, setHazards] = useState([]);
  useEffect(() => {
    const getHazards = async () => {
      const response = await fetch("/api/hazard");
      const hazardsData = await response.json();
      setHazards(hazardsData);
    };
    getHazards();
  }, []);
  return (
    <div>
      <h2>Hazard List</h2>
      {hazards.length > 0
        ? hazards.map((hazard) => {
            return <HazardDetail hazard={hazard} />;
          })
        : "No hazards"}
    </div>
  );
};

export default HazardList;



import React, {useState} from 'react';
import '../App.css';

const HazardForm = () => {
  const [userName, setUserName] = useState ('');
  const [userPhone, setUserPhone] = useState ('');
  const [hazardDescription, setHazardDescription] = useState (
    'testing description'
  );
  const handleSubmit = async e => {
    e.preventDefault ();
    const hazard = {
      userName,
      hazardDescription,
      userPhone,
    };
    const response = await fetch ('/api/hazard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify (hazard),
    });
    const newHazard = await response.json ();
    console.log (newHazard);
  };
  console.log (userName);

  return (
    <form onSubmit={handleSubmit}>

      <label>
        <h3
          style={{
            color: 'black',
            font: 'bold',
            display: 'flex',
            margin: '20px',
          }}
        >
          Add Description:
        </h3>
        <input
          className="hazard-description"
          onChange={event => setHazardDescription (event.target.value)}
          value={hazardDescription}
        />
      </label>
      <label>
        <h3
          style={{
            color: 'black',
            font: 'bold',
            display: 'flex',
            margin: '20px',
          }}
        >
          Add your Name:
        </h3>
        <input
          className="user-name"
          onChange={event => setUserName (event.target.value)}
          value={userName}
        />
      </label>
      <label>
        <h3
          style={{
            color: 'black',
            font: 'bold',
            display: 'flex',
            margin: '20px',
          }}
        >
          Add your phone number:
        </h3>
        <input
          className="user-phone"
          onChange={event => setUserPhone (event.target.value)}
          value={userPhone}
        />
      </label>
      <button className="btn-submit" type="submit">Submit Hazard</button>
    </form>
  );
};

export default HazardForm;

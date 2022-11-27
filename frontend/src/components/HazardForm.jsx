import React, {useState} from 'react';
import '../App.css';

import ImageUpload from './ImageUpload.jsx';

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
        <h3 className="h3">
          Add Description:
        </h3>
        <input
          className="hazard-description"
          onChange={event => setHazardDescription (event.target.value)}
          value={hazardDescription}
        />
      </label>
      <label>
        <h3 className="h3">
          Add your Name (First, Last):
        </h3>
        <input
          className="user-name"
          onChange={event => setUserName (event.target.value)}
          value={userName}
        />
      </label>
      <label>
        <h3 className="h3">
          Add your phone number:
        </h3>
        <input
          className="user-phone"
          onChange={event => setUserPhone (event.target.value)}
          value={userPhone}
        />
      </label>
      <h3 className="h3">
        Add Image:
      </h3>
      <ImageUpload />
      <button className="btn-submit" type="submit">Submit Hazard</button>
    </form>
  );
};

export default HazardForm;

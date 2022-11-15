import React from 'react';
import './App.css';

function App () {
  return (
    <div className="App">

      <header className="app-header">
        <h1>Safety Hazards</h1>
      </header>


{/*TODO: Need to connect safety hazard description, provided by user to collect in MongoDB;*/} 
      <textarea className="description" /> 
      

{/*TODO: Need to make button clickable and fix .btn-submit at App.css- something is wrong with the syntax */}
      <button type="submit">Submit</button>
      

{/*TODO: Add relevant feature for upload photo, upload to BLOB- Amazon than connect to MONGODB*/}      
      <button
        style={{
          backgroundColor: 'orange',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        Upload photo
      </button>

{/*TODO: Add relevant feature for user to add address which will be converted to geolocation*/}
      <button
        style={{
          backgroundColor: 'orange',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        Add Address
      </button>
    </div>
  
  );
}

export default App;

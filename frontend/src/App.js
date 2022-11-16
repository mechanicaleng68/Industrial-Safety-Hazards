import React from 'react';
import './App.css';

import ImageUpload from './ImageUpload';

function App () {
  return (
    <React.Fragment>
      {/*React.Fragment is used to stack divs*/}

      <div className="App">
        <header className="app-header">
          <h1>Safety Hazards</h1>
        </header>
      </div>

      <div>

        <h2>How to submit a safety hazard warning:</h2>
        <ul>
          <li>Provide a description of the safety hazard.</li>
          <li>Provide the address of the safety hazard.</li>
          <li>Upload a photo (optional)</li>
          <li>Submit</li>
        </ul>
      </div>

      <div>
        {/*TODO: Need to connect safety hazard description, provided by user to collect in MongoDB;*/}
        <textarea className="description" />

        {/*TODO: Add relevant feature for user to add address which will be converted to geolocation*/}
        <button className="btn-address">Add Address</button>
         
        <ImageUpload />

        
      {/*TODO: Need to make button clickable and fix .btn-submit at App.css- something is wrong with the syntax */}
      <button className="btn-submit"> Submit</button>

      </div>

      
    </React.Fragment>
  );
}

export default App;

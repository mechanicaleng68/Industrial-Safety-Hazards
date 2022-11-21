import React from 'react';
import {useState} from 'react';
import './App.css';

import  HorizontalLinearStepper from './Stepper.js';


import ImageUpload from './ImageUpload';

function App () {
  const [state, setState] = useState ('add description');

 /*console.log('before useEffect');
  useEffect (
    () => {
      setState(TODO: API to be added, see Dave Gray tutorial)
    },
    [state]
  );
  console.log('after useEffect');*/

  return (
    <React.Fragment>
      {/*React.Fragment is used to stack divs*/}

      <div className="App">
        <header className="app-header">
          <h1>Safety Hazards</h1>
        </header>
      </div>

{/*Currently working on adding Stepper from Material UI */}

      <div>
        <h2>How to submit a safety hazard warning:</h2>
        <HorizontalLinearStepper />
        <ol>
          <li>Provide a description of the safety hazard.</li>
          <li>Provide the address of the safety hazard.</li>
          <li>Upload a photo (optional)</li>
          <li>Submit</li>
        </ol>
      </div>

      <div>
        {/*TODO: Need to connect safety hazard description, provided by user to collect in MongoDB;*/}
        <textarea
          className="description"
          value={state}
          onChange={e => setState (e.target.value)}
        />

        <ImageUpload />

      </div>

      <div>
        <button
          onClick={() => console.log (state, File)}
          className="btn-submit"
        >
          {' '}
          Submit
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;

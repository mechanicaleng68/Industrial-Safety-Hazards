import React, { useState } from 'react';
import HorizontalLinearStepper from '../Stepper';
import ImageUpload from '../ImageUpload';
import '../App.css';


export default function AddNew () {
    const [state, setState] = useState ('add description');
  return (
    <React.Fragment>
      <div>
        <h1>Add New Safety Hazard</h1>
        <HorizontalLinearStepper />
      </div>

      <div>
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


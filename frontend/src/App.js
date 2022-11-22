import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Home from './pages/Home';
import About from './pages/About';
import AddNew from './pages/AddNew';

//import HorizontalLinearStepper from './Stepper.js';

import Footer from './Footer';

function App () {
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

      <Navigation />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<AddNew />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;

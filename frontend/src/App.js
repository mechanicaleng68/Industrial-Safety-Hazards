import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Navigation from './Navigation';
import Home from './pages/Home';
import About from './pages/About';
import AddNew from './pages/AddNew';
import Footer from './pages/Footer';
import HazardDetail from './components/HazardDetail';
import HazardForm from './components/HazardForm';
import HazardList from './components/HazardLists';

//import HorizontalLinearStepper from './Stepper.js';

function App () {
  return (
    <React.Fragment>
      {/*React.Fragment is used to stack divs*/}
      <Navigation />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route element={<Portal />} />*/}
          <Route path="/new" element={<HazardForm />} />
          <Route path="/hazard" element={<HazardList />} />
          <Route path="/about" element={<About />} />
          <Route path="/hazards/detail/:id" element={<HazardDetail />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
//import firebase from 'firebase';
import '../App.css';

export default function About () {
  return (
    <React.Fragment>
      <div>
        <h1>About</h1>;
        <p>This website was created for learning purposes only!</p>
        <p>
          Any resemblance to actual events or persons, living or dead, is entirely coincidental!
        </p>
        <p>
          All photos, used in the website were taken from the Internet. Also, they were placed in entirely random locations.
        </p>
      </div>

      <div>
        <h2>"Guilty" for this to happen:</h2>
        <h3>"Smokin' RMD" Team:</h3>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/project-2-c8133.appspot.com/o/Mariela_resized.png?alt=media&token=2685364b-fd7b-470e-9042-2ca4cea6c7f0"
          alt="Mariela"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/project-2-c8133.appspot.com/o/Reza_resized.png?alt=media&token=22302c3f-7687-40bb-8ea1-1852840013f8"
          alt="Reza"
        />

      </div>
    </React.Fragment>
  );
}

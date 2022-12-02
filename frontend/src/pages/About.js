import React from 'react';
//import firebase from 'firebase';
import '../App.css';

export default function About () {
  return (
    <React.Fragment>
      <div>
        <h1>About</h1>;
        <p>This website was created for learning purposes only!</p>
        <p />
        <p>
          Any resemblance to actual events or persons, living or dead, is entirely coincidental!
        </p>
        <p>
          Some photos, used in the website were taken from the Internet.
        </p>
      </div>

      <div>
        <h2>"Guilty" for this to happen:</h2>
        <h3>"Smokin' RMD" Team:</h3>
        <img
          className="photo-smokin-rmd"
          src="https://firebasestorage.googleapis.com/v0/b/project-2-c8133.appspot.com/o/Mariela_resized.png?alt=media&token=2685364b-fd7b-470e-9042-2ca4cea6c7f0"
          alt="Mariela"
        />
        Mariela
        <img
          className="photo-smokin-rmd"
          src="https://firebasestorage.googleapis.com/v0/b/project-2-c8133.appspot.com/o/Reza_resized.png?alt=media&token=22302c3f-7687-40bb-8ea1-1852840013f8"
          alt="Reza"
        />
        {' '}
        Reza
        <img
          className="photo-smokin-rmd"
          src="https://firebasestorage.googleapis.com/v0/b/project-2-c8133.appspot.com/o/DJ%20Dustin.png?alt=media&token=38fea323-2bd2-4d56-9c0f-c5184cc05333"
          alt="Dustin"
        />
        Dustin

      </div>
    </React.Fragment>
  );
}

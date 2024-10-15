import { useState } from "react";
import "./App.css";
import PersonalDetails from "./components/personal";
import Education from "./components/education";
import Experience from "./components/experience";

function App() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <PersonalDetails />
          <Education />
          <Experience />
        </div>
        <div className="resume">
          <h1>Jane Doe</h1>
          <div className="row">
            <div className="contact">
              <h2>Contact</h2>
              <div className="phone">123-456-7890</div>
              <div className="email">janedoe23@gmail.com</div>
              <div className="address">123 Anywhere St.</div>
            </div>
            <div className="about-me">
              <h2>About Me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="edu">
              <h2>Education</h2>
              <ul>
                <li>Bachelor of Design</li>
                <li>Bachellor of Science</li>
              </ul>
            </div>
            <div className="work">
              <h2>Experience</h2>
              <ul>
                <li>Worked somewhere</li>
                <li>Worked somewhere</li>
                <li>Worked somewhere</li>
                <li>Worked somewhere</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

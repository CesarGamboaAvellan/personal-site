import React, { Component } from "react";
import profilePicture from "./assets/siteImages/fotoperfil.png";
import linkedin from "./assets/siteImages/linkedin.png";
import github from "./assets/siteImages/github.png";
import "./App.css";
import Description from './Description';
import Technologies from './Technologies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="div-father">
          <ul>
            <li>
              <a class="active" href="#home">
                About me
              </a>
            </li>
            <li>
              <a href="#news">Experience</a>
            </li>
            <li>
              <a href="#contact">Portfolio</a>
            </li>
            <li>
              <a href="#about">Contact</a>
            </li>
          </ul>
            <h2 className="divider"></h2>
          <img
            src={profilePicture}
            alt="profilePicture"
            className="rounder-div"
          />
          <Description />
          <h2 className="divider"></h2>
          <Technologies />
        </div>
        <div class="footer">
          <img src={linkedin} alt="linkedin"></img>
          <img src={github} alt="github"></img>
        </div>
      </div>
    );
  }
}

export default App;

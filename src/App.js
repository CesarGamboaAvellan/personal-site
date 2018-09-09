import React, { Component } from "react";
import profilePicture from "./assets/siteImages/fotoperfil.png";
import linkedin from "./assets/siteImages/linkedin.png";
import github from "./assets/siteImages/github.png";
import "./App.css";
import Description from './Description';
import Contact from './Contact';
import Technologies from './Technologies';
import technologiesJson from './technologies.json';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    console.log(technologiesJson);
    const homePage = ( <div className="div-father">
        <img
            src={profilePicture}
            alt="profilePicture"
            className="rounder-div"
          />
          <Description />
          <h2 className="divider"></h2>
      </div>);
    return (
      <div className="App">
        <div className="div-father">
          <ul>
            <li>
            <Link to = "/">Home</Link>
            </li>
            <li>
            <Link to = "/experience">Job Experience</Link>
            </li>
            <li>
              <Link to = "/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to = "/contact">Contact</Link>
            </li>
          </ul>
            <h2 className="divider"></h2>
        </div>
        <ul>{technologiesJson.map((technology)=>{
          return (
            <li>
              {technology.name}
            </li>
          );
        })}</ul>
        <div class="footer">
          <img src={linkedin} alt="linkedin"></img>
          <img src={github} alt="github"></img>
        </div>
        <Switch>
      <Route exact path="/">{homePage}</Route>
      <Route path="/portfolio" component={Contact}/>
      <Route path="/experience" component={Technologies}/>
      <Route path="/contact" component={Contact}/>
  </Switch>
      </div>
    );
  }
}

export default App;

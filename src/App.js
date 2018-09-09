import React, { Component } from "react";
import profilePicture from "./assets/siteImages/fotoperfil.png";
import linkedin from "./assets/siteImages/linkedin.png";
import github from "./assets/siteImages/github.png";
import "./App.css";
import Description from './Description';
import Contact from './Contact';
import Technologies from './Technologies';
import technologiesJson from './technologies.json';
import NodeImage from './assets/siteImages/nodejslogo64px.png'
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
          <table className="technologies-table">
            <thead>Some technologies i worked with</thead>
            <tbody>
              <tr className="technologies-tr">
              {technologiesJson.map((technology)=>{
          return (
                <td>
                  <figure>
                  <img src={require(`${technology.src}`)} className="technologies-size"></img>
                    {/* <figcaption>
                      {technology.name}
                    </figcaption> */}
                  </figure>
            </td>
          );
        })}
              </tr>
            </tbody>
          </table>
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

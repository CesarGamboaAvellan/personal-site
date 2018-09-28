import React, { Component } from "react";
import profilePicture from "./assets/siteImages/fotoperfil.png";
import linkedin from "./assets/siteImages/linkedin.png";
import github from "./assets/siteImages/github.png";
import medium from "./assets/siteImages/medium-logo.png"
import stackOverflow from "./assets/siteImages/stack.ico";
import "./App.css";
import Description from './Description';
import Contact from './Contact';
import Technologies from './Technologies';
import Portfolio from './Portfolio';
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
            <thead className="table-head">Some technologies i worked with</thead>
            <tbody>
              <tr className="technologies-tr">
              {technologiesJson.map((technology)=>{
          return (
                <td>
                  <figure>
                  <img src={require(`${technology.src}`)} className="technologies-size"></img>
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
          <ul className="font">
            <li>
            <Link to = "/">About</Link>
            </li>
            <li>
              <Link to = "/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to = "/contact">Contact</Link>
            </li>
          </ul>
            <div className="contact-icons">
            <h4 className="font">Find me on:  </h4>
            <a href="https://www.linkedin.com/in/cesar-gamboa-avellan-57690a14b/">
            <img src={linkedin} className = "img-contact" alt="linkedin">
            </img>
            </a>
          <a href="https://github.com/CesarGamboaAvellan">
          <img src={github} className = "img-contact"alt="github"></img>
          </a> 
          <a href="https://medium.com/@cesargamboaavel">
          <img src={medium} className = "img-contact"alt="medium"></img>
          </a>
          <a href="https://stackoverflow.com/users/10305787/cesar-gamboa-avellan">
          <img src={stackOverflow} className = "img-contact" alt="stackoverflow"></img>
            </a>
            </div>
            <h2 className="divider"></h2>
        </div>
        <div class="footer">
         Cesar Gamboa Avellan-Personal Site
        </div>
        <Switch>
      <Route exact path="/">{homePage}</Route>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/experience" component={Technologies}/>
      <Route path="/contact" component={Contact}/>
  </Switch>
      </div>
    );
  }
}

export default App;

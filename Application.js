import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Poem1 from "./poem1";
import Poem2 from "./poem2";
import Poem3 from "./poem3";
 
class Application extends Component {
    render () {
      return (
        <HashRouter>
      <div>
        <ul className = "header">
          <li><NavLink to ="/poem1">Poem1</NavLink></li>
          <li><NavLink to ="/poem2">Poem2</NavLink></li>
          <li><NavLink to ="/poem3">Poem3</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path = "/poem1" component = {Poem1}/>
          <Route path = "/poem2" component = {Poem2}/>
          <Route path = "/poem3" component = {Poem3}/>
        </div>
      </div>
      </HashRouter>
      );
    }
}
export default Application;
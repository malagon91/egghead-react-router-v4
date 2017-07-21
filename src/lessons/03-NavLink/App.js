// Video 4

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
 } from 'react-router-dom';

const isActiveFunc = (match, location) => {
  console.log(match, location)
  return match
}


/**
 * Los NAvLink ayudan mas a saber en que tab estamos con el activeClassName o activeStyle
 * la palabra exact se usa para que cuando el link este innactivo el color vuelva a como estaba 
 * isActive={isActiveFunc} el metodo que se le asigne a isActive se ejecuta siempre que el nav se reendera 
 * no solo cuando estan en el link donde se declaro
 * ppero cuando esta en el link donde se declara el objeto match si tiene valores  cuando esta en otro tab
 * ese objeto va null
 */
const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeStyle={{color: 'green'}} to="/about">About</NavLink>
    <NavLink
      activeClassName="active"
      isActive={isActiveFunc}
      to="/contact">
      Contact
    </NavLink>
  </nav>
)

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/about" render={() => <h1>About</h1>} />
      <Route path="/contact" render={() => <h1>Contact</h1>} />
    </div>
  </Router>
);

export default App

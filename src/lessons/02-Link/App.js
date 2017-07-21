// Video 3

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to={{ pathname: "/about" }}>About</Link>
    <Link replace to="/contact">Contact</Link>
  </nav>
)
/**
 *El replace lo que hace en este ejemplo es si cuando inicia la app nos vamos a about y luego a contact al dar hacia 
 atras el navegador nos lleva a home si no tenemos el replace nos llevara a about  
 *
 */
//el ultimo link se asigna como replate lo que quiere decir que elimina la ruta anterior por una nueva 
// por lo tanto tenemos que revisar si as asi como se tiene que poner en todos los links 
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
/**
 * <Route exact path="/" render={() => <h1>Home</h1>} /> se puede hacer el render inline dentro del Router pero 
 * lo mejor es crear componentes completamente separados para estas funciones
 */
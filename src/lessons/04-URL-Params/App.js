//Video 5
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
/**
 * En este ejemplo con el match lo que hacesmos es tomar los parametros como variables para hacer algo en nuestra pagina 
 * siempre y cuando vallan con quion o el signo que nosotros pongamos en  path="/:page?-:subpage?"
 * http://localhost:3000/lessons/04-URL-Params/react-router
 * la palabra react es nuetra pagina y router es la subpagina
 */
const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Route
        path="/:page?-:subpage?"
        render={({match}) => (
        <h1>
          PAGE: {match.params.page || 'Home'}<br />
          SUBPAGE: {match.params.subpage}
        </h1>
      )} />
    </div>
  </Router>
)

export default App

// Video 7
//Parse Query Parameters in React Router v4


/**
 * con estas funciones podemos obtener todo el query de la URL a la que visitamos 
 * la URL siempre genera un pos con un key diferente 
 * 
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/?id=123">Inline</Link>
    <Link to={{pathname: '/', search: 'id=456'}}>Object</Link>
  </nav>
)

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
      <Route path="/" render={({match, location}) => (
        <div>
          <p>root</p>
          <p>{JSON.stringify(match)}</p>
          <p>{JSON.stringify(location)}</p>
          <p>{new URLSearchParams(location.search).get('id')}</p>
        </div>
      )} />
    </div>
  </Router>
)

export default App


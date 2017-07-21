// video 8
//Render Catch-All Routes with React Router v4 using the Switch Component
/**
 * There are many cases where we will need a catch-all route in our web applications.
 *  This can include 404-style routes when nothing is match or other use cases where where we receive an invalid route in React Router v4.
 */

//Example for handling 404 errors
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';


const Links = () =>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact/xxx/xxx/xxxx/x">Contact</Link>
    </nav>

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
)//Scon el objeto Switch solo se hace render del primer route con el que haga match con este podemos manejar los 
//errores por not found

export default App

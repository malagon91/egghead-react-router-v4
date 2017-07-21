//Video 12

//Redirect to Another Page with React Router v4

/**
 * Overriding a browser's current location without breaking the back button or causing an infinite redirect 
 * can be tricky sometimes. In this lesson we'll learn how React Router v4 allows us to easily achieve a 
 * redirect without getting bogged down in browser history.

 */
/**
 * Usamos el redirect para enviar a otro route pero conserva los param qcon los que inicio 
 * 
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

const loggedin = true;
const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/old/123">Old</Link>
    <Link to="/new/456">New</Link>
    <Link to="/protected">Protected</Link>
  </nav>

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
        <Route exact path="/" render={() => (<h1>Home</h1>)} />
        <Route
          path="/new/:str"
          render={({match}) => (<h1>New: {match.params.str}</h1>)}/>

        <Route path="/old/:str" render={({match}) => (
          <Redirect to={`/new/${match.params.str}`} />
        )} />

        <Route path="/protected" render={() => (
          loggedin
          ? <h1>Welcome to the protected page</h1>
          : <Redirect to="/new/Login" />
        )} />

    </div>
  </Router>
)

export default App

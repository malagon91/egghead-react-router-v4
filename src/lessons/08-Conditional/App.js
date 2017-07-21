// Video 9
//Conditionally Render a React Router v4 Route with the Switch Component
/**
 * We often want to render a Route conditionally within our application. In React Router v4, the Route components 
 *match the current route inclusively so a “stack” of Routes will all be processed. To render a single Route 
 exclusively we can wrap them in the Switch component to render the first Route that matches our current URL.

 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const Links = () =>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route path="/contact" render={() => <h1>Contact</h1>} />
        <Route path="/:itemid"
          render={({match}) => <h1>Item: {match.params.itemid}</h1>} />
      </Switch>
    </div>
  </Router>
)
/**
 *  en este ejemplo se ua el item id para dirigirte a una pagina si en la pagina del router ponemos algo nos va renderear 
 * el router itemid 
 * ocurre un error si no ponemos el switch nos hace render de la pagina en la que estamos y el itemid 
 */
export default App

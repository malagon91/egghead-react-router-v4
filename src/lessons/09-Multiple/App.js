//Video 10

// Render Multiple Components for the Same Route in React Router v4

/**React Router v4 allows us to render Routes as components wherever we like in our components. 
 * This can provide some interesting use cases for creating dynamic routes on our applications.
 * 
 */
/**
 * en este ejmplo vimos como simplificar los el render haciendo 2 componentes que reciban el match de la url 
 * esto va a servir para cuando tenemos 2 o mas rutas que manden llamar el mismo compoente pero este 
 * componente puede actuar diferente depende del parametro de page con el que se llama
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Links = () =>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Header />
      <Content />
    </nav>

const Header = ({match}) => (
  <div className="header">
    <Route path="/:page"
      render={({match}) => (
        <h1>{match.params.page} header</h1>)} />
  </div>
)

const Content = ({match}) => (
  <div className="content">
      <Route path="/:page"
        render={({match}) => (
          <p>{match.params.page} content</p>)} />
  </div>
)

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
    </div>
  </Router>
)

export default App



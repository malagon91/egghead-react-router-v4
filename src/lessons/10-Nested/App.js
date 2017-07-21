//Video 11

//Render Nested Routes with React Router v4

/**
 * With React Router v4 the entire library is built as a series of React components. 
 * That means that creating nested Routes is as simple as creating any other nested element in your application.
 */

 /**
  * Aqui generamos nuevas rutas dinamicamente de las rutas principales tomando como variable las subrutas que se asignan 
  en los links
  */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (<h1>Home</h1>)
const Menu = () => (
  <div>
    <h1>Menu</h1>
    <Link to="/menu/food">Food</Link>
    <Link to="/menu/drink">Drinks</Link>
    <Link to="/menu/sides">Sides</Link>
    <Route
      path="/menu/:section"
      render={({match}) => <h2>{match.params.section}</h2>} />
  </div>
)

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
    </div>
  </Router>
)

export default App

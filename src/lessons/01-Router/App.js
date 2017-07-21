import React from 'react';
import {
  BrowserRouter as Router,
  Route
 } from 'react-router-dom';

const Home = (props) => {
  console.log(props)
  return <h1>Home custom </h1>
}

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Route exact path="/" component={Home} />
      {/*<Route path="/about" render={() => <h1>About</h1>} />*/}
      <Route
        path="/about"
        children={({match}) => match && <h1>About</h1>} />
    </div>
  </Router>
);
//cuando un Route es children se va a mostrar en todas las vistas pero en este ejemplo le agregaron el match y con esto solo 
//que la ruta sea identica al path se va a mostrar (supongo que es mejor usarlo sin children) caundo sean rutas 
//completamente distintas
export default App


//this router works like angular 
//Video 13

//Intercept Route Changes with React Router v4 Prompt Component

/**If a user has entered some input, or the current Route is in a “dirty” state and we want to confirm that 
 * data will be lost, React Router v4 provides a Prompt component to interrupt the Route transition and ask the 
 * user a question.
 */
/**
 * Prompt sirve para mandar mensajes si en un router ahi campos llenos sin hacer submit pregunta si estas seguro de cambiar 
 * de opcion
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom';

const Home = () => (<h1>Home</h1>)
class Form extends React.Component {
  state = {dirty: false}
  setDirty = () => this.setState({dirty: true})
  render(){
    return (
      <div>
        <h1>Form</h1>
        <input type="text" onInput={this.setDirty}/>
        <Prompt
          when={this.state.dirty}
          message="Data will be lost!"
         />
      </div>
    )
  }
}
const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
    </div>
  </Router>
)



export default App

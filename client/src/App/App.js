import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import Display from './pages/Display';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    /** 
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    )**/
    return (
      <div>
        <NavBar />
        <Display/>
        <Footer />
      </div>
      /** 
      <Switch>
        <App/>
      </Switch>**/
    )
  }
}

export default App;

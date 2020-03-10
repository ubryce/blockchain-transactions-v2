import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import Display from './pages/Display';
import Bitcoin from './pages/Bitcoin';
import Ethereum from './pages/Ethereum';
import API from './pages/API';

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
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Display}/>
            <Route path='/bitcoin' component={Bitcoin}/>
            <Route path='/ethereum' component={Ethereum}/>
            <Route path='/api' component={API}/>
          </Switch>
          <Footer />
        </div>
      </Router>
      /** 
      <Switch>
        <App/>
      </Switch>**/
    )
  }
}

export default App;

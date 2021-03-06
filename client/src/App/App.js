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
import LiveMap from './pages/LiveMap';
import { Redirect } from 'react-router';
import Transactions from './pages/Transactions';

class App extends Component {
  //set state
  constructor(props){
    super(props);
    this.state = {
        isNavbarHidden: false
    };
  }


  componentDidMount () {
    document.title = "Blockchain Transactions";
    const currentRoute = this.props.location;
    console.log(currentRoute);
    if (currentRoute === '/api') {
      this.setState({ isNavbarHidden: false });
    }
  }
  render() {

    //if on API
    const APIContainer = () => (
      <div className="container">
        
        <Route exact path="/" render={() => <Redirect to="/api" />} />
        <Route path="/api" component={API} />
        
      </div>
    )

    //if on anything other than API page
    const DefaultContainer = () => (
      <div>
        <NavBar/>
        <Route exact path='/' component={Display}/>
        <Route path='/liveMap' component={LiveMap}/>
        <Route path='/transactions' component={Transactions}/>
        <Route path='/bitcoin' component={Bitcoin}/>
        <Route path='/ethereum' component={Ethereum}/>
        <Footer/>
      </div>
   )
    return (
      <div>
    
        <Router>
            <Switch>
              <Route exact path="/(api)" component={APIContainer}/>
              <Route component={DefaultContainer}/>
            </Switch>
        </Router>
        
      </div>
    )
  }
}

export default App;

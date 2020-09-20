import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue';
import Navbar from './utility/Navbar/Navbar';
import Modal from './utility/Modal/Modal'
import CityVenue from './pages/CityVenues/CityVenue'
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess';
import Account from './pages/Account/Account'


class App extends React.Component {
  render(){
    return (
      <Router>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/venue/:vid" component={SingleFullVenue} />
        <Route exact path="/city/:cityName" component={CityVenue} />
        <Route exact path="/payment-success/:stripeToken" component={PaymentSuccess} />
        <Route exact path="/account" component={Account} />
        <Route path="/" component={Modal} />
      </Router>
    );
  }
  
}

export default App;

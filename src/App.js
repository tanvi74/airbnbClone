import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue';
import Navbar from './utility/Navbar/Navbar';
import Modal from './utility/Modal/Modal'

class App extends React.Component {
  render(){
    return (
      <Router>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/venue/:vid" component={SingleFullVenue} />
        <Route path="/" component={Modal} />
      </Router>
    );
  }
  
}

export default App;

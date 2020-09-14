import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Navbar from './utility/Navbar/Navbar';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
  
}

export default App;

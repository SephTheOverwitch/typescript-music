import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import Clock from './components/Clock';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="App">
          <Sidebar/>
          <div id="page-wrap">
            <h2> Test for Sidebar! Clickety click.</h2>
            <Route exact path='/' render={(props) => <Welcome {...props} name="Martina" />}/>
            <Route path='/clock' component={Clock} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
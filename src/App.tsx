import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import MusicList from './components/MusicList';
import MusicStore from './stores/MusicStore';
import { Provider } from 'mobx-react';

let musicStore: MusicStore = new MusicStore()

class App extends React.Component {
  render() {
    return (
      <Provider musicStore={musicStore}>
      <Router>
        <div id="App">
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
          <div id="page-wrap">
            <h2> Test for Sidebar! Clickety click.</h2>
            <Route exact path='/' render={(props) => <Welcome {...props} name="Martina" />}/>
            <Route path='/clock' component={Clock} />
            <Route path='/musiclist' component={MusicList} />
          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
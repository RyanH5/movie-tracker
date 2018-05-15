import React, { Component } from 'react';
import './styles.css';
import { fetchRecentMovies } from "../Api/Api";

class App extends Component {
  render() {
    console.log(fetchRecentMovies());
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Tracker</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

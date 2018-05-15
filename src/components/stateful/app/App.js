import React, { Component } from 'react';
import './styles.css';
import { fetchRecentMovies } from "../api/Api";
import { movieData }from '../../../helpers'

class App extends Component {

  async componentDidMount() {
    let data = await fetchRecentMovies();
    console.log(data)
  }

  render() {

    // console.log(movieData(data))
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Tracker</h1>
        </header>
        <p></p>
      </div>
    );
  }
}

export default App;

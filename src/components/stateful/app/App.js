import React, { Component } from 'react';
import './styles.css';
import { fetchRecentMovies } from '../api/Api';
import { movieData } from '../../../helpers';

export class App extends Component {
  constructor () {
    super();
    this.state = {
      movies: []
    };
  }

  async componentDidMount () {
    let movieList = await fetchRecentMovies();
    let movies = movieData(movieList);
    this.setState({
      movies
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Tracker</h1>
        </header>
        <ul>
          {
            this.state.movies.map((movie, index) => {
              return <li key={movie.id}>{movie.title}</li>;
            })
          }
        </ul>

      </div>
    );
  }
}


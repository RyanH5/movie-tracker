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
    const movieImageRootUrl = "https://image.tmdb.org/t/p/w500";
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Tracker</h1>
        </header>
        <ul>
          {
            this.state.movies.map((movie) => {
              const movieImage = movie.image;
              return (
                <ul key={12345}>
                  <li key={movie.id}>{movie.title}</li>
                  <img src={`${movieImageRootUrl}${movieImage}`} alt="Movie Poster"/>
                </ul>
              ) 
              ; 
            }
            )}
        </ul>
      </div>
    ); 
  } 

}



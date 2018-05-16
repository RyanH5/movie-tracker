import React, { Component } from 'react';
import { connect } from 'react-redux'
import './styles.css';
import { fetchRecentMovies } from '../api/Api';
import { movieData } from '../../../helpers';
import { captureMovies } from '../../../actions/movieActions/movieActions'

export class App extends Component {

  async componentDidMount () {
    let movieList = await fetchRecentMovies();

    let movies = movieData(movieList);
    this.props.captureMovies(movies)
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
            }
        </ul>
      </div>
    );
  };
};

export const mapStateToProps = state => {return {movies: state.movies}};

export const mapDispatchToProps = dispatch => {
  return {captureMovies: (movies) => (dispatch(captureMovies(movies)))}
};
//with router library
export default connect(mapStateToProps, mapDispatchToProps)(App);

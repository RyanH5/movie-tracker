import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import { fetchRecentMovies } from '../api/Api';
import { captureMovies } from '../../../actions/movieActions/movieActions';
import { cleanMovieData } from '../../../helpers';

export class App extends Component {

  async componentDidMount () {
    let recentMovies = await fetchRecentMovies();
    let movieList = cleanMovieData(recentMovies.results);
    this.props.captureMovies(movieList);
  }

  displayMovies = () => {
    const movieImageRootUrl = 'https://image.tmdb.org/t/p/w500';

    return this.props.movies.map((movie, index) => {
      return (
        <article className="movie" key={`key${index}`}>
          <h3>{movie.title}</h3>
          <img src={`${movieImageRootUrl+movie.image}`} alt="Movie Title" />
          <p>{movie.votes}</p>
        </article>
      );
    });
  };

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Tracker</h1>
        </header>
        <section className="movies-wrapper">
          {
            this.displayMovies()
          }
        </section>
      </div>
    );
  };
}

export const mapStateToProps = (state) => {
  return ({movies: state.movies});
};

export const mapDispatchToProps = dispatch => ({
  captureMovies: movies => dispatch(captureMovies(movies))
});

// wrap with router library

App.propTypes = {
  captureMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

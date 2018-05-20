import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cleanMovieData } from '../../../helpers';
import { fetchRecentMovies } from '../api/Api';
import { captureMovies } from '../../../actions/movieActions/movieActions';
import { App } from '../../stateless/app/App';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import './MovieContainer.css'

class MovieContainer extends Component {

  async componentDidMount () {
    let recentMovies = await fetchRecentMovies();
    let movieList = cleanMovieData(recentMovies.results);
    this.props.captureMovies(movieList);
  }

  displayMovies = () => {
    const movieImageRootUrl = 'https://image.tmdb.org/t/p/w500';
    return this.props.movies.map((movie, index) =>
      (
        <article className="movie" key={`key${index}`}>
          <h3>{movie.title}</h3>
          <img src={`${movieImageRootUrl + movie.image}`} alt="Movie Title" />
          <p>{movie.votes}</p>
        </article>
      ));
  };

  render () {
    return (
      <div className="movie-header-container"><h2>Choose Your Favorites</h2>
      <div className="movie-container d-flex">

        {this.displayMovies()}
      </div></div>
    );
  }
}

MovieContainer.propTypes = {};

export const mapStateToProps = state => {
  return {movies: state.movies};
};

export const mapDispatchToProps = dispatch => ({
  captureMovies: movies => dispatch(captureMovies(movies))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieContainer));

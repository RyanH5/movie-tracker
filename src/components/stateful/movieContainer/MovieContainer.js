import React, { Component } from 'react';
import { cleanMovieData } from '../../../helpers';
import { fetchRecentMovies } from '../api/Api';
import { captureMovies } from '../../../actions/movieActions/movieActions';
import { connect } from 'react-redux';
import './MovieContainer.css'
import { withRouter } from 'react-router-dom';


class MovieContainer extends Component {

  async componentDidMount () {
    let recentMovies = await fetchRecentMovies();
    let movieList = cleanMovieData(recentMovies.results);
    this.props.captureMovies(movieList);
  }

  handleUserFavorites = () => {
    if (Object.keys(this.props.loginSuccess).length === 0) {
      alert('Please create an account in order to add favorites')
    }
  };

  displayMovies = () => {
    const movieImageRootUrl = 'https://image.tmdb.org/t/p/w500';
    return this.props.movies.map((movie, index) =>
      (
        <article className="movie-card" key={`key${index}`}>
          <h3>{movie.title}</h3>
          <button onClick={this.handleUserFavorites}>Favorite</button>
          <img src={`${movieImageRootUrl + movie.image}`} alt={movie.title} />
          <p>Vote Average: {movie.vote}</p>
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

export const mapStateToProps = state => ({
  movies: state.movies,
  loginSuccess: state.loginSuccess
});

export const mapDispatchToProps = dispatch => ({
  captureMovies: movies => dispatch(captureMovies(movies))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieContainer));

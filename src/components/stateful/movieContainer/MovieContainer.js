import React, { Component } from 'react';
import { cleanMovieData } from '../../../helpers';
import { fetchRecentMovies, fetchFavorites, addFavorite } from '../api/Api';
import { captureMovies, captureFavorites } from '../../../actions/movieActions/movieActions';
import { connect } from 'react-redux';
import './MovieContainer.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieContainer extends Component {

  async componentDidMount () {
    let recentMovies = await fetchRecentMovies();
    let movieList = cleanMovieData(recentMovies.results);
    this.props.captureMovies(movieList);
  }

  // toggleFavorite = async (movieId, userId) => {
  //   if (this.props.userId) {
  //     const favs = await fetchFavorites(this.props.userId);
  //     this.props.favorites.some(favorite => {
  //       return favorite.movieId === movie_id;
  //     });
  //   }
  // }

  handleUserFavorites = async (movie) => {
    if (Object.keys(this.props.loginSuccess).length === 0) {
      alert('Please create an account in order to add favorites');
    } else {
      // this.toggleFavorite(movieId);
      this.props.captureFavorites(movie);
      addFavorite(movie, this.props.userId);

      // const storedMovie = await addFavorite(movieId, userId)

      // fetch post
    }
  };

  displayMovies = () => {
    const movieImageRootUrl = 'https://image.tmdb.org/t/p/w500';
    const movies = this.props.location.pathname === '/favorites' ?
      this.props.favorites :
      this.props.movies;
    return this.props.movies.map((movie, index) =>
      (
        <article className="movie-card" key={`key${index}`}>
          <h3>{movie.title}</h3>
          <button onClick={() => {
            const movie = this.props.movies[index];
            this.handleUserFavorites(movie);
          }}>Favorite
          </button>
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
        </div>
      </div>
    );
  }
}

// MainContainer.propTypes = {
//   categoryData: PropTypes.array,
//   addFavorite: PropTypes.func,
//   favorites: PropTypes.array,
//   currentCategory: PropTypes.string
// };
MovieContainer.propTypes = {
  movies: PropTypes.array

};

export const mapStateToProps = state => ({
  movies: state.movies,
  loginSuccess: state.loginSuccess,
  favorites: state.favorites,
  userId: state.loginSuccess.userId
});

export const mapDispatchToProps = dispatch => ({
  captureMovies: movies => dispatch(captureMovies(movies)),
  captureFavorites: favorites => dispatch(captureFavorites(favorites))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieContainer));

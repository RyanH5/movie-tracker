import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link, NavLink, Route } from 'react-router-dom';
import { fetchRecentMovies } from '../api/Api';
import { captureMovies } from '../../../actions/movieActions/movieActions';
import { cleanMovieData } from '../../../helpers';
import CreateUser from '../createUser/CreateUser';
import LoginForm from '../loginUser/LoginForm';

export class App extends Component {

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
      ))
  };

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Tracker</h1>
          {/*<nav>*/}
            {/*<NavLink to="/login" className="login">Login</NavLink>*/}
            {/*/!*<NavLink to"/createUser" className="create-user">Create User</NavLink>*!/*/}
          {/*</nav>*/}
        </header>
        {/*<Route exact path='/' component={App} />*/}
        {/*<Route path='/login' component={LoginForm} />*/}
        {/*<Route exact path='/' component={App} />*/}
        <section className="movies-wrapper">
          {
            this.displayMovies()
          }
        </section>
      </div>
    );
  };
}

export const mapStateToProps = state => {
  return {movies: state.movies};
};


export const mapDispatchToProps = dispatch => ({
  captureMovies: movies => dispatch(captureMovies(movies))
});

// wrap with router library

App.propTypes = {
  captureMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  displayMovies: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
export const cleanMovieData = (movieData) => movieData.map((movie, index) => {
  return {
    title: movie.title,
    image: movie.backdrop_path,
    votes: movie.popularity,
    poster: movie.poster_path,
    releaseDate: movie.release_date,
    vote: movie.vote_average,
    overview: movie.overview,
    id: index
  };
});
export const cleanMovieData = (movieData) => movieData.map((movie, index) => {
  return {
    title: movie.title,
    image: movie.backdrop_path,
    poster: movie.poster_path,
    releaseDate: movie.release_date,
    vote: movie.vote_average,
    overview: movie.overview,
    id: movie.id
  };
});
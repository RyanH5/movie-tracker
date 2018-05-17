export const cleanMovieData = (movieData) => movieData.map((movie, index) => {
  return {
    title: movie.title,
    image: movie.backdrop_path,
    votes: movie.popularity,
    id: index
  };
});
export const movieData = (data) => data.results.map((movie, index) => {
  return {
    title: movie.title,
    image: movie.backdrop_path,
    votes: movie.popularity,
    id: index
  };
});
import apiKey from '../../../apiKey';

export const fetchRecentMovies = async () => {
  try {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
    const response = await fetch(url);
    // if data.error => throw new Error else return data.
    const recentMovies = await response.json();
    return recentMovies;
  } catch (error) {
    throw new Error('Failed to Fetch');
  }
};


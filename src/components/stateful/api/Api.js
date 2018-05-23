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

export const addFavorite = async (movie, userId) => {
  try {
    const favoritesUrl = `http://localhost:3000/api/users/favorites/new`;
    const options = {
      method: 'POST',
      body: JSON.stringify({
        ...movie,
        userId
      })
    };
    const response = await fetch(favoritesUrl, options);
    if (!response.ok) {
      throw Error(`${response.status}`);
    }

    return response;
  } catch (error) {
    throw new Error(`Failed to fetch. (error: ${error.message})`);
  }
};

export const fetchFavorites = async (userId) => {
  try {
    const favoritesUrl = `http://localhost:3000/api/users/${userId}/favorites`;
    const response = await fetch(favoritesUrl);
    if (response.ok) {
      const favoritesList = response.json();
      return favoritesList;
    }
    throw Error(`${response.status}`);
  } catch (error) {
    throw new Error(`error: ${error.message}`);
  }
};
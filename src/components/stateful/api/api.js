import React from 'react';
import Key from '../../../apiKey';


export const fetchRecentMovies = async () => {
  try {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${Key}`;
    const response = await fetch(url);
    if (response.status === 200) {
      const recentMovies = await response.json();
      return recentMovies;
    } else {
      throw new Error( response.status );
    }
  } catch (error) {
    throw new Error('Failed to fetch');
  }
};


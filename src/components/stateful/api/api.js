import React from 'react';
import Key from '../../../apiKey';


export const fetchRecentMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${Key}`;
  const response = await fetch(url);
  const recentMovies = await response.json();
  return recentMovies;
};


import {MovieContainer} from './MovieContainer'
import React from 'react'

describe("MovieContainer", () => {
  it.skip('should call fetchRecentMovies when mounted', () => {
    const fetchRecentMovies = jest.fn();

    expect(wrapper.instance(fetchRecentMovies).toHaveBeenCalled());
  });

  it.skip('should call cleanMovieData with correct parameters', () => {

    expect(cleanMovieData).toHaveBeenCalledWith(mockMovies);
  });
});

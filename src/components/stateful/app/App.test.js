import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { App } from './App';
import { fetchRecentMovies } from '../api/Api';
import { cleanMovieData } from '../../../helpers';

describe('App', () => {
  beforeEach(() => {
    const fetchRecentMovies = jest.fn();
    const captureMovies = jest.fn();
    const mockMovies = [{
          vote_count: 3363,
          id: 299536,
          video: false,
          vote_average: 8.6,
          title: 'Avengers: Infinity War',
          popularity: 627.125658,
          poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
          original_language: 'en',
          original_title: 'Avengers: Infinity War',
          genre_ids: [12, 878, 14, 28],
          backdrop_path: '/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
          adult: false,
          overview: 'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
          release_date: '2018-04-25'
        }];
    const wrapper = shallow(<App />);
  });
  it('should call fetchRecentMovies when mounted', () => {

    expect(fetchRecentMovies).toHaveBeenCalled();
  });

  it.skip('should call cleanMovieData with correct parameters', () => {

    expect(cleanMovieData).toHaveBeenCalledWith(mockMovies);
  });

  it('clean Movie data correctly', () => {


  });
});

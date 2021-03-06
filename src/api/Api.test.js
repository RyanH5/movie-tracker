import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { fetchRecentMovies } from './api';
import apiKey from '../apiKey';

describe('api', () => {
  describe('fetchRecentMovies', () => {
    let mockUrl;
    let mockData;

    beforeEach(() => {
      mockUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
      mockData = {
        results:
          [{
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
          }]
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockData)
        });
      });
    });

    it('should get called with the correct parameters', () => {
      fetchRecentMovies();

      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });

    it('should throw an error if the response fails', () => {
      let badUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=broken_key';

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject(
          (Error('Failed to Fetch'))
        )
      );
      const actual = fetchRecentMovies(badUrl);
      const expected = Error('Failed to Fetch');

      expect(actual).rejects.toEqual(expected);
    });
  });
});

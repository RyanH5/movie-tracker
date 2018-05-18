import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { App } from './App';
import { fetchRecentMovies } from '../api/Api';
import { cleanMovieData } from '../../../helpers';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('App', () => {
  let mockMovies;
  beforeEach(() => {
    const captureMovies = jest.fn();
    mockMovies = [{
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

    const mockState = [{
      title: 'Avengers: Infinity War',
      image: '/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
      votes: 703.53968,
      id: 0
    }, {
      title: 'Rampage',
      imag: '/wrqUiMXttHE4UBFMhLHlN601MZh.jpg',
      vote: 169.383611,
      id: 1
    }];

    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const wrapper = shallow(<Provider store={mockStore}><App /></Provider>);
    // const props1={movies: mockMovies}
    //
    // const wrapper = shallow(<App
    //   props={props1}
    // />);
    wrapper.setState = ({mockState});
  });

  // or explicitly pass "store" as a prop to "Connect(App)".

  it.skip('should call fetchRecentMovies when mounted', () => {
    const fetchRecentMovies = jest.fn();

    expect(wrapper.instance(fetchRecentMovies).toHaveBeenCalled());
  });

  it.skip('should call cleanMovieData with correct parameters', () => {

    expect(cleanMovieData).toHaveBeenCalledWith(mockMovies);
  });

  it.skip('clean Movie data correctly', () => {

  });
});

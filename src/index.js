import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/stateful/app/App';
import { createStore } from 'redux';
import { moviesReducer } from './reducers/reducers';

const store = createStore(moviesReducer);
console.log(store)
ReactDOM.render(<App />, document.getElementById('root'));

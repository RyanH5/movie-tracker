import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { App } from './components/stateful/app/App';
import { createStore } from 'redux';
import rootReducer from './reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools);
const router = (<Provider store={store}><App/></Provider>);
ReactDOM.render(router, document.getElementById('root'));

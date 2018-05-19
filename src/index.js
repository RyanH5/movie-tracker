import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/stateless/app/App';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const application = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
ReactDOM.render(application, document.getElementById('root'));

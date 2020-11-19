import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import combineReducers from './store/reducers/index'

const store = createStore(combineReducers, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, document.getElementById('root')
);



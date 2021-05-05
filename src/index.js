
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import ghostReducer from './reducers/ghostReducer'

// your store is where you store data, globally
//the reducers tell us what we want to do with that store based on certain conditions.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(ghostReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
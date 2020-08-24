import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './store/reducers';
import './index.css';
import 'normalize.css';
// import App from './App';
import App2 from './App2';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App2 />
    </Router>
  </Provider>,
  document.getElementById('root')
);

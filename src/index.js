import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

// import App from './App';
import App2 from './App2';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App2 />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

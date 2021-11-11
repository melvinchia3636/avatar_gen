import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Main from './App';
import Changelog from './Changelog';
import APIAccess from './APIAccess';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/changelog" element={<Changelog />} />
      <Route path="/api-access" element={<APIAccess />} />
    </Routes>
  </Router>,
  document.getElementById('root'),
);

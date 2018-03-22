import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Main from './Main';
import store, { getUsers } from './store';
import { Provider } from 'react-redux';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  app
);


getUsers()
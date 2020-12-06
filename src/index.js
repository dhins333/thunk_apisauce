import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './AppRouter';
import store from './store/store';

import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>
  ,document.getElementById('root')
);
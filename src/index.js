import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routes/AppRouter';
import store from './redux/store/store';

import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>
  ,document.getElementById('root')
);
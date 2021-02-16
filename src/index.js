import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import { fetchSmallContactList } from './store/reducers/contactListReducer';
import App from './components/App';

import './index.html';

store.dispatch( fetchSmallContactList );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/app/App';
import configureStore from 'store/configureStore';
import './index.html';
import { requestRandomText } from 'actions/randomText';

const store = configureStore();
store.dispatch(requestRandomText());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

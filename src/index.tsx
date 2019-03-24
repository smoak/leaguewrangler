import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import createStore from './data/store/createStore';
import { setSessionUserToken } from './data/domains/sessionSetUserToken/actions';
import { getUserTokenFromCookies } from './support/auth';

const store = createStore();
const userToken = getUserTokenFromCookies();
if (userToken) {
  store.dispatch(setSessionUserToken(userToken));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

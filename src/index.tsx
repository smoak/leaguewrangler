import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import createStore from './data/store/createStore';
import { setSessionUserToken } from './data/domains/sessionSetUserToken/actions';
import { getUserToken } from './support/auth';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'support/theme';

const store = createStore();
const userToken = getUserToken();

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: userToken ? `Bearer ${userToken}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

if (userToken) {
  store.dispatch(setSessionUserToken(userToken));
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

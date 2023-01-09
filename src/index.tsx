import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import theme from 'support/theme';

import App from './components/App';
import { setSessionUserToken } from './data/domains/sessionSetUserToken/actions';
import createStore from './data/store/createStore';
import registerServiceWorker from './registerServiceWorker';
import { getUserToken } from './support/auth';

const store = createStore();
const userToken = getUserToken();

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  headers: {
    authorization: userToken ? `Bearer ${userToken}` : '',
  },
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

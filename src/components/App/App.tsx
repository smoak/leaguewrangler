import CssBaseline from '@material-ui/core/CssBaseline';
import React, { SFC } from 'react';

import AppBody from '../AppBody';
import AppHeader from '../AppHeader';
import Login from '../Login';

export interface MappedStateProps {
  readonly isAuthenticated: boolean;
}

export type AppProps = MappedStateProps;

const App: SFC<AppProps> = ({ isAuthenticated }) => {
  return (
    <div className="App">
      <CssBaseline />
      <div className="App__header">
        <AppHeader />
      </div>
      <div className="App__body">{isAuthenticated ? <AppBody /> : <Login />}</div>
    </div>
  );
};

export default App;

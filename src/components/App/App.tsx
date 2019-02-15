import CssBaseline from '@material-ui/core/CssBaseline';
import React, { SFC } from 'react';

import AppBody from '../AppBody';
import AppHeader from '../AppHeader';

const App: SFC<{}> = () => {
  return (
    <div className="App">
      <CssBaseline />
      <div className="App__header">
        <AppHeader />
      </div>
      <div className="App__body">
        <AppBody />
      </div>
    </div>
  );
};

export default App;

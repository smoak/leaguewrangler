import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

import AppBody from '../AppBody';
import AppHeader from '../AppHeader';

class App extends React.Component {
  public render() {
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
  }
}

export default App;

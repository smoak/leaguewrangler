import React, { SFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageHome from '../PageHome';

const Routes: SFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={PageHome} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

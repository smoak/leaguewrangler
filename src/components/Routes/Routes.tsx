import React, { SFC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import PageHome from '../PageHome';

const Routes: SFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/home" component={PageHome} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

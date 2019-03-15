import React, { SFC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import PageHome from '../PageHome';
import Login from '../Login';

const Routes: SFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/home" component={PageHome} />
        <Route path="/login" component={Login} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

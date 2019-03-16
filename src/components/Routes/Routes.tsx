import React, { SFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageHome from '../PageHome';
import Login from '../Login';
import AuthenticatedRoute from '../AuthenticatedRoute';

const Routes: SFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthenticatedRoute exact={true} path="/" component={PageHome} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

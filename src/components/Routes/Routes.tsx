import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PageHome } from '../PageHome/PageHome';

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={PageHome} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

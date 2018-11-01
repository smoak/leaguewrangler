import React, { SFC } from 'react';

import Routes from 'components/Routes';

const AppBody: SFC = () => {
  return (
    <div className="AppBody">
      <div className="AppBody__main">
        <Routes />
      </div>
    </div>
  );
};

export default AppBody;

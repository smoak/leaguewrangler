import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Event from '.';

storiesOf('Event', module).add('default', () => (
  <Event
    title="Home vs Away"
    startTime={new Date(1557029700000)}
    location="Somewhere USA"
    teamPhotoUrl="https://picsum.photos/48"
  />
));
import { MockedProvider } from '@apollo/react-testing';
import { storiesOf } from '@storybook/react';

import { RsvpStatus } from '../../graphql/types/globalTypes';

import Event from '.';

storiesOf('Event', module).add('default', () => (
  <MockedProvider>
    <Event
      eventId={1}
      teamId={1}
      title="Home vs Away"
      startTime={new Date(1557029700000)}
      location="Somewhere USA"
      teamPhotoUrl="https://picsum.photos/48"
      rsvpStatus={RsvpStatus.NONE}
    />
  </MockedProvider>
));

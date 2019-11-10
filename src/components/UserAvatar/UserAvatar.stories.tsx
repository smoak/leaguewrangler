import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { MockedResponse, MockedProvider } from '@apollo/react-testing';

import getUserAvatar from '../../graphql/queries/getUserAvatar';
import UserAvatar from './UserAvatar';

const mocks: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: getUserAvatar,
    },
    result: {
      data: {
        currentUser: {
          profilePhotoThumbnailUrl: 'https://picsum.photos/80',
        },
      },
    },
  },
];

storiesOf('UserAvatar', module).add('default', () => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <UserAvatar />
  </MockedProvider>
));

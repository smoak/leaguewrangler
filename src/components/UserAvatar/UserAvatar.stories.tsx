import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { MockedResponse } from 'react-apollo/test-links';
import { MockedProvider } from 'react-apollo/test-utils';

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

storiesOf('UserAvatar', module).add('default', () => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserAvatar />
    </MockedProvider>
  );
});

import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import { storiesOf } from '@storybook/react';

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

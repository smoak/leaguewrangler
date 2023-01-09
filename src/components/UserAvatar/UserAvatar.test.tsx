import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

import UserAvatar from './UserAvatar';
import getUserAvatarQuery from '../../graphql/queries/getUserAvatar';

describe('UserAvatar', () => {
  describe('when the component is fetching data', () => {
    const mocks = [
      {
        request: {
          query: getUserAvatarQuery,
        },
        result: {
          data: {
            currentUser: {
              profilePhotoThumbnailUrl: 'https://picsum.photos/40',
            },
          },
        },
      },
    ];

    beforeEach(() => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <UserAvatar />
        </MockedProvider>
      );
    });

    it('renders as expected', () => {
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });

  describe('when the user does not have an avatar', () => {
    const mocks = [
      {
        request: {
          query: getUserAvatarQuery,
        },
        result: {
          data: {},
        },
      },
    ];

    beforeEach(async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <UserAvatar />
        </MockedProvider>
      );

      await waitForElementToBeRemoved(screen.getByRole('progressbar'));
    });

    it('renders as expected', () => {
      expect(screen.getByTestId('avatar-placeholder'));
    });
  });

  describe('when the user does have an avatar', () => {
    const mocks = [
      {
        request: {
          query: getUserAvatarQuery,
        },
        result: {
          data: {
            currentUser: {
              profilePhotoThumbnailUrl: 'https://picsum.photos/40',
            },
          },
        },
      },
    ];

    beforeEach(async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <UserAvatar />
        </MockedProvider>
      );

      await waitForElementToBeRemoved(screen.getByRole('progressbar'));
    });

    it('renders as expected', () => {
      expect(screen.getByRole('img')).toHaveAttribute('src', 'https://picsum.photos/40');
    });
  });
});

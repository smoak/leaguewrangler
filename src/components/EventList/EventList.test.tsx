import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitForElementToBeRemoved } from 'support/test-utils';
import getCurrentUserEvents from 'graphql/queries/getCurrentUserEvents';
import { RsvpStatus } from 'graphql/types/globalTypes';

import EventList from './EventList';

describe('EventList', () => {
  describe('when the data is loading', () => {
    beforeEach(() => {
      render(
        <MockedProvider>
          <EventList />
        </MockedProvider>
      );
    });

    it('renders a skeleton event', () => {
      expect(screen.getByTestId('skeleton-event-1')).toBeInTheDocument();
    });
  });

  describe('when the server returns an error', () => {
    const mocks = [
      {
        request: {
          query: getCurrentUserEvents,
        },
        error: new Error('nope'),
      },
    ];

    beforeEach(async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <EventList />
        </MockedProvider>
      );

      await waitForElementToBeRemoved(() => screen.queryByTestId('skeleton-event-1'));
    });

    it('renders an error', () => {
      expect(screen.getByText('Some error')).toBeInTheDocument();
    });
  });

  describe('when the server returns no data', () => {
    const mocks = [
      {
        request: {
          query: getCurrentUserEvents,
        },
        result: {
          data: null,
        },
      },
    ];

    beforeEach(async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <EventList />
        </MockedProvider>
      );

      await waitForElementToBeRemoved(() => screen.queryByTestId('skeleton-event-1'));
    });

    it('renders an error', () => {
      expect(screen.getByText('Some error')).toBeInTheDocument();
    });
  });

  describe('when the server returns data with no events', () => {
    const mocks = [
      {
        request: {
          query: getCurrentUserEvents,
        },
        result: {
          data: {
            currentUser: {
              events: [],
              __typename: 'User',
            },
          },
        },
      },
    ];

    beforeEach(async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <EventList />
        </MockedProvider>
      );

      await waitForElementToBeRemoved(() => screen.queryByTestId('skeleton-event-1'));
    });

    it('renders a message indicating there are no games', () => {
      expect(screen.getByText('No events scheduled')).toBeInTheDocument();
    });
  });

  describe('when the server returns data with events', () => {
    const mocks = [
      {
        request: {
          query: getCurrentUserEvents,
        },
        result: {
          data: {
            currentUser: {
              events: [
                {
                  __typename: 'Event',
                  endTimestamp: 1657691037616,
                  startTimestamp: 1657691025566,
                  id: 1,
                  location: null,
                  team: {
                    __typename: 'Team',
                    id: 1,
                    photoThumbnailUrl: 'url',
                    shortName: 'team',
                  },
                  title: 'test',
                  viewerRsvpStatus: RsvpStatus.NONE,
                },
              ],
              __typename: 'User',
            },
          },
        },
      },
    ];

    beforeEach(async () => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <EventList />
        </MockedProvider>
      );

      await waitForElementToBeRemoved(() => screen.queryByTestId('skeleton-event-1'));
    });

    it('renders the events', () => {
      expect(screen.getAllByRole('article')).toHaveLength(1);
    });
  });
});

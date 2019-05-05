import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import { MockedResponse, MockedProvider } from 'react-apollo/test-utils';

import EventList from './EventList';
import wait from 'waait';
import getCurrentUserEvents from '../../graphql/queries/getCurrentUserEvents';
import { GetCurrentUserEvents_currentUser } from '../../graphql/types/GetCurrentUserEvents';
import { GraphQLRequest } from 'apollo-link';

describe('EventList', () => {
  let component: ReactWrapper;
  let mocks: ReadonlyArray<MockedResponse>;
  let request: GraphQLRequest;
  let result: MockedResponse['result'];

  beforeEach(async () => {
    request = {
      query: getCurrentUserEvents,
    };
    const currentUser: GetCurrentUserEvents_currentUser = {
      __typename: 'User',
      events: [
        {
          eventId: 1,
          __typename: 'Event',
          title: 'title',
          startTimestamp: 1557029700,
          team: {
            __typename: 'Team',
            shortName: 'team',
            photoThumbnailUrl: 'url',
          },
          location: null,
          endTimestamp: null,
        },
      ],
    };
    result = {
      data: { currentUser },
    };
    mocks = [
      {
        request,
        result,
      },
    ];

    component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <EventList />
      </MockedProvider>
    );

    await wait(0);

    component = component.update();
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });

  describe('when an event has a location', () => {
    beforeEach(async () => {
      const currentUser: GetCurrentUserEvents_currentUser = {
        __typename: 'User',
        events: [
          {
            eventId: 1,
            __typename: 'Event',
            title: 'title',
            startTimestamp: 1557029700,
            team: {
              __typename: 'Team',
              shortName: 'team',
              photoThumbnailUrl: 'url',
            },
            location: {
              __typename: 'Location',
              address: 'address',
              googleMapsUrl: 'googleMapsUrl',
              name: 'name',
            },
            endTimestamp: null,
          },
        ],
      };
      result = {
        data: { currentUser },
      };
      mocks = [
        {
          request,
          result,
        },
      ];

      component = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <EventList />
        </MockedProvider>
      );

      await wait(0);

      component = component.update();
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when an event has no start time', () => {
    beforeEach(async () => {
      const currentUser: GetCurrentUserEvents_currentUser = {
        __typename: 'User',
        events: [
          {
            eventId: 1,
            __typename: 'Event',
            title: 'title',
            startTimestamp: null,
            team: {
              __typename: 'Team',
              shortName: 'team',
              photoThumbnailUrl: 'url',
            },
            location: null,
            endTimestamp: null,
          },
        ],
      };
      result = {
        data: { currentUser },
      };
      mocks = [
        {
          request,
          result,
        },
      ];

      component = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <EventList />
        </MockedProvider>
      );

      await wait(0);

      component = component.update();
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when there are no events scheduled', () => {
    beforeEach(async () => {
      const currentUser: GetCurrentUserEvents_currentUser = {
        __typename: 'User',
        events: [],
      };
      result = {
        data: {
          currentUser,
        },
      };
      mocks = [
        {
          request,
          result,
        },
      ];

      component = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <EventList />
        </MockedProvider>
      );

      await wait(0);

      component = component.update();
    });

    it('renders an error message', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when there is a server error', () => {
    beforeEach(async () => {
      result = {
        errors: [{ message: 'Error!' }],
      };
      mocks = [
        {
          request,
          result,
        },
      ];
      component = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <EventList />
        </MockedProvider>
      );

      await wait(0);

      component = component.update();
    });

    it('renders an error message', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

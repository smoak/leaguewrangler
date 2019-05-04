import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import { MockedResponse, MockedProvider } from 'react-apollo/test-utils';

import EventList from './EventList';
import wait from 'waait';
import getCurrentUserEvents from '../../graphql/queries/getCurrentUserEvents';

describe('EventList', () => {
  let component: ReactWrapper;
  let mocks: ReadonlyArray<MockedResponse>;

  beforeEach(async () => {
    mocks = [
      {
        request: {
          query: getCurrentUserEvents,
        },
        result: {
          data: {
            currentUser: {
              events: [
                {
                  title: 'title',
                  startTimestamp: 1557029700,
                  team: {
                    shortName: 'team',
                    photoThumbnailUrl: 'url',
                  },
                  location: {
                    name: 'name',
                    address: 'address',
                    googleMapsUrl: 'url',
                  },
                  endTimestamp: undefined,
                },
              ],
            },
          },
        },
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

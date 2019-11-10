import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import EventWithStyles, { Event } from '.';
import { RsvpStatus } from 'graphql/types/globalTypes';

describe('Event', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(
      <Event
        classes={{ card: 'card' }}
        title="foo"
        startTime={new Date(1557029700000)}
        location="Somewhere USA"
        teamPhotoUrl="https://picsum.photos/48"
        rsvpStatus={RsvpStatus.NONE}
      />
    );
  });

  describe('when the event has no team photo url', () => {
    component = shallow(
      <Event
        classes={{ card: 'card' }}
        title="foo"
        startTime={new Date(1557029700000)}
        location="Somewhere USA"
        teamPhotoUrl={null}
        rsvpStatus={RsvpStatus.NONE}
      />
    );

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('EventWithStyles', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(
      <EventWithStyles
        title="foo"
        startTime={new Date(1557029700000)}
        location="Somewhere USA"
        teamPhotoUrl="https://picsum.photos/48"
        rsvpStatus={RsvpStatus.NONE}
      />
    );
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

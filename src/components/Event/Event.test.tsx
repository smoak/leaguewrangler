import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import EventWithStyles, { Event } from '.';

describe('Event', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(
      <Event
        classes={{ card: 'card', icon: 'icon' }}
        title="foo"
        startTime={new Date(1557029700000)}
        location="Somewhere USA"
        teamPhotoUrl="https://picsum.photos/48"
      />
    );
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
      />
    );
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

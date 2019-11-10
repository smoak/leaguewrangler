import { ShallowWrapper, shallow } from 'enzyme';
import React from 'react';

import EventActions from './EventActions';
import { RsvpStatus } from 'graphql/types/globalTypes';

describe('EventActions', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<EventActions rsvpStatus={RsvpStatus.NONE} />);
  });

  it('renders as expected', () => {
    expect(component).toMatchSnapshot();
  });
});

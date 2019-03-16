import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Routes from '.';

describe('Routes', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Routes />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

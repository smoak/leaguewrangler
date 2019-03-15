import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Login from '.';

describe('Login', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Login />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

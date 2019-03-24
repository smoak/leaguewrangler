import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Login } from '.';

describe('Login', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(
      <Login classes={{ main: 'main', avatar: 'avatar', form: 'form', submit: 'submit', paper: 'paper' }} />
    );
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

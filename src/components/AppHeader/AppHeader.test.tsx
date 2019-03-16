import { shallow, ShallowWrapper } from 'enzyme';
import { AppHeader } from './AppHeader';
import React from 'react';

describe('AppHeader', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<AppHeader classes={{ menuButton: 'styles' }} />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

import { shallow, ShallowWrapper } from 'enzyme';
import AppBody from './AppBody';
import React from 'react';

describe('AppBody', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<AppBody />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import PageHome from './PageHome';

describe('PageHome', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<PageHome />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

import { ShallowWrapper, shallow } from 'enzyme';
import React from 'react';

import PageHomeWithStyles, { PageHome } from './PageHome';

describe('PageHome', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<PageHome classes={{ main: 'main' }} />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('PageHomeWithStyles', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<PageHomeWithStyles />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

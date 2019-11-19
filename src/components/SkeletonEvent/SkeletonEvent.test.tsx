import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

import SkeletonEventWithStyles, { SkeletonEvent } from './SkeletonEvent';

describe('SkeletonEvent', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<SkeletonEvent classes={{ card: 'card' }} />);
  });

  it('renders as expected', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('SkeletonEventWithStyles', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<SkeletonEventWithStyles />);
  });

  it('renders as expected', () => {
    expect(component).toMatchSnapshot();
  });
});

import { ShallowWrapper, shallow } from 'enzyme';
import React from 'react';

import { Location } from './Location';

describe('Location', () => {
  let component: ShallowWrapper;

  describe('with no locationUrl', () => {
    beforeEach(() => {
      component = shallow(<Location locationName="locationName" />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a locationUrl', () => {
    beforeEach(() => {
      component = shallow(<Location locationName="locationName" locationUrl="https://example.com" />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

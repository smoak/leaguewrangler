import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import NotPlayingButton from './NotPlayingButton';

describe('NotPlayingButton', () => {
  let component: ShallowWrapper;

  describe('when not playing', () => {
    beforeEach(() => {
      component = shallow(<NotPlayingButton isNotPlaying={true} className="test" />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when playing', () => {
    beforeEach(() => {
      component = shallow(<NotPlayingButton isNotPlaying={false} className="test" />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import PlayingButton from './PlayingButton';

describe('PlayingButton', () => {
  let component: ShallowWrapper;

  describe('when playing', () => {
    beforeEach(() => {
      component = shallow(<PlayingButton isPlaying={true} className="test" />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when not playing', () => {
    beforeEach(() => {
      component = shallow(<PlayingButton isPlaying={false} className="test" />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

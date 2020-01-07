import { IconButton } from '@material-ui/core';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { RsvpStatus } from '../../graphql/types/globalTypes';
import PlayingButton from './PlayingButton';

describe('PlayingButton', () => {
  let component: ShallowWrapper;

  describe('when playing', () => {
    beforeEach(() => {
      component = shallow(<PlayingButton isPlaying={true} className="test" onRsvp={jest.fn()} />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when not playing', () => {
    beforeEach(() => {
      component = shallow(<PlayingButton isPlaying={false} className="test" onRsvp={jest.fn()} />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the user rsvps', () => {
    let onRsvp: jest.Mock;

    beforeEach(() => {
      onRsvp = jest.fn();
      component = shallow(<PlayingButton isPlaying={true} className="test" onRsvp={onRsvp} />);

      component.find(IconButton).simulate('click');
    });

    it('calls `onRsvp` with YES', () => {
      expect(onRsvp).toHaveBeenCalledWith(RsvpStatus.YES);
    });
  });
});

import { IconButton } from '@material-ui/core';
import { ShallowWrapper, shallow } from 'enzyme';

import { RsvpStatus } from '../../graphql/types/globalTypes';

import NotPlayingButton from './NotPlayingButton';

describe('NotPlayingButton', () => {
  let component: ShallowWrapper;

  describe('when not playing', () => {
    beforeEach(() => {
      component = shallow(<NotPlayingButton isNotPlaying={true} className="test" onRsvp={jest.fn()} />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when playing', () => {
    beforeEach(() => {
      component = shallow(<NotPlayingButton isNotPlaying={false} className="test" onRsvp={jest.fn()} />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the user rsvps', () => {
    let onRsvp: jest.Mock;

    beforeEach(() => {
      onRsvp = jest.fn();
      component = shallow(<NotPlayingButton isNotPlaying={true} className="test" onRsvp={onRsvp} />);

      component.find(IconButton).simulate('click');
    });

    it('calls `onRsvp` with NO', () => {
      expect(onRsvp).toHaveBeenCalledWith(RsvpStatus.NO);
    });
  });
});

import { IconButton } from '@material-ui/core';
import { ShallowWrapper, shallow } from 'enzyme';
import React from 'react';

import { RsvpStatus } from '../../graphql/types/globalTypes';

import TentativeButton from './TentativeButton';

describe('TentativeButton', () => {
  let component: ShallowWrapper;

  describe('when tentative', () => {
    beforeEach(() => {
      component = shallow(<TentativeButton isTentative={true} className="test" onRsvp={jest.fn()} />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when not tentative', () => {
    beforeEach(() => {
      component = shallow(<TentativeButton isTentative={false} className="test" onRsvp={jest.fn()} />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the user rsvps', () => {
    let onRsvp: jest.Mock;

    beforeEach(() => {
      onRsvp = jest.fn();
      component = shallow(<TentativeButton isTentative={true} className="test" onRsvp={onRsvp} />);

      component.find(IconButton).simulate('click');
    });

    it('calls `onRsvp` with MAYBE', () => {
      expect(onRsvp).toHaveBeenCalledWith(RsvpStatus.MAYBE);
    });
  });
});

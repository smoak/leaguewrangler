jest.mock('./hooks');

import { ShallowWrapper, shallow } from 'enzyme';
import React from 'react';

import { RsvpStatus } from '../../graphql/types/globalTypes';

import { EventActions } from './EventActions';
import { useSaveRsvpMutation } from './hooks';

describe('EventActions', () => {
  let component: ShallowWrapper;
  let saveRsvpCallback: jest.Mock;

  beforeEach(() => {
    saveRsvpCallback = jest.fn().mockName('saveRsvpCallback');
    const loading = false;

    (useSaveRsvpMutation as jest.Mock).mockReturnValue({ loading, saveRsvpCallback });

    component = shallow(
      <EventActions eventId={1} teamId={1} rsvpStatus={RsvpStatus.NONE} classes={{ icon: 'icon' }} />
    );
  });

  describe('when loading', () => {
    beforeEach(() => {
      const loading = true;
      (useSaveRsvpMutation as jest.Mock).mockReturnValue({ loading, saveRsvpCallback });

      component = shallow(
        <EventActions eventId={1} teamId={1} rsvpStatus={RsvpStatus.NONE} classes={{ icon: 'icon' }} />
      );
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  it('renders as expected', () => {
    expect(component).toMatchSnapshot();
  });
});

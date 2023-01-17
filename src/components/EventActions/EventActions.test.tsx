import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from 'support/test-utils';

import { RsvpStatus } from '../../graphql/types/globalTypes';

import { EventActions } from './EventActions';

describe('EventActions', () => {
  describe('when rendered', () => {
    beforeEach(() => {
      render(
        <MockedProvider>
          <EventActions eventId={1} teamId={1} rsvpStatus={RsvpStatus.NONE} classes={{ icon: 'icon' }} />
        </MockedProvider>
      );
    });

    it('renders a playing button', () => {
      expect(screen.getByRole('button', { name: 'Playing' })).toBeInTheDocument();
    });

    it('renders a tentative button', () => {
      expect(screen.getByRole('button', { name: 'Tentative' })).toBeInTheDocument();
    });

    it('renders a not playing button', () => {
      expect(screen.getByRole('button', { name: 'Not Playing' })).toBeInTheDocument();
    });
  });
});

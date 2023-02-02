import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from 'support/test-utils';

import { RsvpStatus } from '../../graphql/types/globalTypes';

import Event from './Event';

describe('Event', () => {
  describe('with a team photo url', () => {
    beforeEach(() => {
      render(
        <MockedProvider>
          <Event
            eventId={1}
            teamId={1}
            title="foo"
            startTime={1557029700000}
            location="Somewhere USA"
            teamPhotoUrl="https://picsum.photos/48"
            rsvpStatus={RsvpStatus.NONE}
          />
        </MockedProvider>
      );
    });

    it('renders the location name', () => {
      expect(screen.getByText('Somewhere USA')).toBeInTheDocument();
    });
  });

  describe('without a team photo url', () => {
    beforeEach(() => {
      render(
        <MockedProvider>
          <Event
            eventId={1}
            teamId={1}
            title="foo"
            startTime={1557029700000}
            teamPhotoUrl={null}
            location="Somewhere USA"
            rsvpStatus={RsvpStatus.NONE}
          />
        </MockedProvider>
      );
    });

    it('renders the location name', () => {
      expect(screen.getByText('Somewhere USA')).toBeInTheDocument();
    });
  });
});

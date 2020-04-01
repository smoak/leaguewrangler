jest.mock('react-apollo');

import { renderHook } from '@testing-library/react-hooks';
import { useMutation } from 'react-apollo';

import { RsvpStatus } from '../../graphql/types/globalTypes';

import { useSaveRsvpMutation } from './hooks';

describe('hooks', () => {
  describe('.useSaveRsvpMutation', () => {
    let saveRsvpMutation: ReturnType<typeof useSaveRsvpMutation>;
    const eventId = 1;
    const teamId = 1;

    describe('when loading', () => {
      beforeEach(() => {
        (useMutation as jest.Mock).mockReturnValue([jest.fn(), { loading: true }]);

        saveRsvpMutation = renderHook(() => useSaveRsvpMutation({ eventId, teamId })).result.current;
      });

      it('returns the correct loading value', () => {
        expect(saveRsvpMutation.loading).toBe(true);
      });

      it('returns a saveRsvpCallback', () => {
        expect(saveRsvpMutation.saveRsvpCallback).toBeDefined();
      });
    });

    describe('when the `saveRsvpCallback` is called', () => {
      let saveRsvp: jest.Mock;

      beforeEach(() => {
        saveRsvp = jest.fn();
        (useMutation as jest.Mock).mockReturnValue([saveRsvp, { loading: false }]);

        saveRsvpMutation = renderHook(() => useSaveRsvpMutation({ eventId, teamId })).result.current;
        saveRsvpMutation.saveRsvpCallback(RsvpStatus.NONE);
      });

      it('calls `saveRsvp` with the correct variables', () => {
        expect(saveRsvp).toHaveBeenCalledWith({ variables: { eventId, teamId, rsvpStatus: RsvpStatus.NONE } });
      });
    });
  });
});

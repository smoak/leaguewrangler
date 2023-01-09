import { MockedProvider } from '@apollo/client/testing';
import { act, renderHook } from '@testing-library/react-hooks';
import { ReactNode } from 'react';

import { RsvpStatus } from '../../graphql/types/globalTypes';
import saveEventRsvp from '../../graphql/mutations/saveRsvp';

import { useSaveRsvpMutation } from './hooks';

describe('hooks', () => {
  describe('.useSaveRsvpMutation', () => {
    const eventId = 1;
    const teamId = 1;
    const rsvpStatus = RsvpStatus.YES;
    const mocks = [
      {
        request: {
          query: saveEventRsvp,
          variables: {
            eventId,
            teamId,
            rsvpStatus,
          },
        },
        result: {
          data: {
            saveRsvp: {
              id: eventId,
              viewerRsvpStatus: rsvpStatus,
            },
          },
        },
      },
    ];
    const wrapper = ({ children }: { children?: ReactNode }) => (
      <MockedProvider mocks={mocks}>{children}</MockedProvider>
    );

    describe('when rendered', () => {
      let saveRsvpMutation: ReturnType<typeof useSaveRsvpMutation>;

      beforeEach(() => {
        saveRsvpMutation = renderHook(() => useSaveRsvpMutation({ eventId, teamId }), { wrapper }).result.current;
      });

      it('returns a saveRsvpCallback', () => {
        expect(saveRsvpMutation.saveRsvpCallback).toBeDefined();
      });
    });

    describe('when the `saveRsvpCallback` is called', () => {
      let loading: boolean = false;

      beforeEach(() => {
        const { result } = renderHook(() => useSaveRsvpMutation({ eventId, teamId }), { wrapper });

        act(() => {
          result.current.saveRsvpCallback(RsvpStatus.NONE);
        });

        loading = result.current.loading;
      });

      it('is loading', () => {
        expect(loading).toBe(true);
      });
    });
  });
});

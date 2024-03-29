import { useCallback } from 'react';

import saveEventRsvp from '../../graphql/mutations/saveRsvp';
import { SaveEventRsvpMutation, SaveEventRsvpMutationVariables } from '../../graphql/types/saveRsvp';
import { RsvpStatus } from '../../graphql/types/globalTypes';
import { useMutation } from '@apollo/client';

type SaveRsvpCallback = (rsvpStatus: RsvpStatus) => void;

interface SaveRsvpMutation {
  readonly loading: boolean;
  readonly saveRsvpCallback: SaveRsvpCallback;
}

interface UseSaveRsvpMutationOptions {
  readonly eventId: number;
  readonly teamId: number;
}

type UseSaveRsvpMutation = (options: UseSaveRsvpMutationOptions) => SaveRsvpMutation;
export const useSaveRsvpMutation: UseSaveRsvpMutation = ({ eventId, teamId }) => {
  const [saveRsvp, { loading }] = useMutation<SaveEventRsvpMutation, SaveEventRsvpMutationVariables>(saveEventRsvp);
  const saveRsvpCallback = useCallback(
    (rsvpStatus) => {
      saveRsvp({ variables: { eventId, teamId, rsvpStatus } });
    },
    [eventId, teamId, saveRsvp]
  );

  return {
    loading,
    saveRsvpCallback,
  };
};

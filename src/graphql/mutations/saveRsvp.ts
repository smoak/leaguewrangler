import { gql } from 'apollo-boost';

export default gql`
  mutation SaveEventRsvp($eventId: Int!, $rsvpStatus: RsvpStatus!, $teamId: Int!, $comments: String) {
    saveRsvp(comments: $comments, eventId: $eventId, rsvpStatus: $rsvpStatus, teamId: $teamId) {
      id: eventId
      viewerRsvpStatus
    }
  }
`;

import { gql } from 'apollo-boost';

export default gql`
  query GetCurrentUserEvents {
    currentUser {
      events {
        id: eventId
        title
        endTimestamp
        startTimestamp
        viewerRsvpStatus
        team {
          id: teamId
          shortName
          photoThumbnailUrl
        }
        location {
          name
          address
          googleMapsUrl
        }
      }
    }
  }
`;

import { gql } from 'apollo-boost';

export default gql`
  query GetCurrentUserEvents {
    currentUser {
      events {
        eventId
        title
        endTimestamp
        startTimestamp
        team {
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

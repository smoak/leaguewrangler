import { gql } from '@apollo/client';

export default gql`
  query GetUserAvatar {
    currentUser {
      profilePhotoThumbnailUrl
    }
  }
`;

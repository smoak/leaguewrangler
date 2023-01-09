import { gql } from '@apollo/client';

export default gql`
  query GetTeams {
    teams {
      name
      id: teamId
    }
  }
`;

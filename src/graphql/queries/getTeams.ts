import { gql } from 'apollo-boost';

export default gql`
  query GetTeams {
    teams {
      name
      id: teamId
    }
  }
`;

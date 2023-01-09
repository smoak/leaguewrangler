import { gql } from '@apollo/client';

export default gql`
  mutation CreateUserToken($username: String!, $password: String!) {
    createUserToken(username: $username, password: $password) {
      token
    }
  }
`;

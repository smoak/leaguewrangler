/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUserToken
// ====================================================

export interface CreateUserToken_createUserToken {
  __typename: "UserToken";
  /**
   * A unique token for the user matched. Tokens are 36-character, lower-cased GUIDs.
   */
  token: string;
}

export interface CreateUserToken {
  /**
   * Create a user token
   */
  createUserToken: CreateUserToken_createUserToken;
}

export interface CreateUserTokenVariables {
  username: string;
  password: string;
}

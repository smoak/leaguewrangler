import * as Types from './globalTypes';

export type CreateUserTokenMutationVariables = Types.Exact<{
  username: Types.Scalars['String'];
  password: Types.Scalars['String'];
}>;


export type CreateUserTokenMutation = { __typename?: 'Mutation', createUserToken?: { __typename?: 'UserToken', token: string } | null };

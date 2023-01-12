import * as Types from './globalTypes';

export type GetTeamsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTeamsQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', name: string, id: number } | null> };

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTeams
// ====================================================

export interface GetTeams_teams {
  __typename: "Team";
  name: string;
  id: number;
}

export interface GetTeams {
  /**
   * Get teams for a user
   */
  teams: (GetTeams_teams | null)[];
}

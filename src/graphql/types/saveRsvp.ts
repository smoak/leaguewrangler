import * as Types from './globalTypes';

export type SaveEventRsvpMutationVariables = Types.Exact<{
  eventId: Types.Scalars['Int'];
  rsvpStatus: Types.RsvpStatus;
  teamId: Types.Scalars['Int'];
  comments?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type SaveEventRsvpMutation = { __typename?: 'Mutation', saveRsvp: { __typename?: 'Event', viewerRsvpStatus: Types.RsvpStatus, id: number } };

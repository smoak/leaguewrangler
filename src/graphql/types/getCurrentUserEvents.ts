import * as Types from './globalTypes';

export type GetCurrentUserEventsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCurrentUserEventsQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', events: Array<{ __typename?: 'Event', title: string, endTimestamp?: number | null, startTimestamp?: number | null, viewerRsvpStatus: Types.RsvpStatus, id: number, team: { __typename?: 'Team', shortName: string, photoThumbnailUrl?: string | null, id: number }, location?: { __typename?: 'Location', name: string, address?: string | null, googleMapsUrl?: string | null } | null } | null> } };

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RsvpStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetCurrentUserEvents
// ====================================================

export interface GetCurrentUserEvents_currentUser_events_team {
  __typename: "Team";
  shortName: string;
  photoThumbnailUrl: string | null;
}

export interface GetCurrentUserEvents_currentUser_events_location {
  __typename: "Location";
  name: string;
  address: string | null;
  googleMapsUrl: string | null;
}

export interface GetCurrentUserEvents_currentUser_events {
  __typename: "Event";
  eventId: number;
  title: string;
  endTimestamp: number | null;
  startTimestamp: number | null;
  viewerRsvpStatus: RsvpStatus;
  team: GetCurrentUserEvents_currentUser_events_team;
  location: GetCurrentUserEvents_currentUser_events_location | null;
}

export interface GetCurrentUserEvents_currentUser {
  __typename: "User";
  events: (GetCurrentUserEvents_currentUser_events | null)[];
}

export interface GetCurrentUserEvents {
  /**
   * Gets the current user
   */
  currentUser: GetCurrentUserEvents_currentUser;
}

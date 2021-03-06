/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RsvpStatus } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SaveEventRsvp
// ====================================================

export interface SaveEventRsvp_saveRsvp {
  __typename: "Event";
  id: number;
  viewerRsvpStatus: RsvpStatus;
}

export interface SaveEventRsvp {
  /**
   * RSVP to an event
   */
  saveRsvp: SaveEventRsvp_saveRsvp;
}

export interface SaveEventRsvpVariables {
  eventId: number;
  rsvpStatus: RsvpStatus;
  teamId: number;
  comments?: string | null;
}

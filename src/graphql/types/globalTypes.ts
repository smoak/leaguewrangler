export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  /** Gets the current user */
  currentUser: User;
  /** Get a single event */
  event?: Maybe<Event>;
  /** Get events for a team */
  events: Array<Maybe<Event>>;
  /** Get teams for a user */
  teams: Array<Maybe<Team>>;
};


export type QueryEventArgs = {
  eventId: Scalars['Int'];
  teamId: Scalars['Int'];
};


export type QueryEventsArgs = {
  teamId: Scalars['Int'];
};


export type QueryTeamsArgs = {
  dashboardOnly?: InputMaybe<Scalars['Boolean']>;
};

/** A user */
export type User = {
  __typename?: 'User';
  displayName: Scalars['String'];
  emailAddress1: Scalars['String'];
  events: Array<Maybe<Event>>;
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  lastName: Scalars['String'];
  profilePhotoFullUrl: Scalars['String'];
  profilePhotoSmallUrl: Scalars['String'];
  profilePhotoThumbnailUrl: Scalars['String'];
  userId: Scalars['Int'];
};


/** A user */
export type UserEventsArgs = {
  dashboardOnly?: InputMaybe<Scalars['Boolean']>;
};

/** An event */
export type Event = {
  __typename?: 'Event';
  endTimestamp?: Maybe<Scalars['Int']>;
  eventId: Scalars['Int'];
  eventType: Scalars['String'];
  location?: Maybe<Location>;
  seasonId: Scalars['Int'];
  seasonName?: Maybe<Scalars['String']>;
  startTimestamp?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  team: Team;
  title: Scalars['String'];
  viewerRsvpStatus: RsvpStatus;
};

/** A location */
export type Location = {
  __typename?: 'Location';
  address?: Maybe<Scalars['String']>;
  googleMapsDirectionsUrl?: Maybe<Scalars['String']>;
  googleMapsUrl?: Maybe<Scalars['String']>;
  isPublic: Scalars['Boolean'];
  locationId: Scalars['Int'];
  name: Scalars['String'];
};

/** A team */
export type Team = {
  __typename?: 'Team';
  name: Scalars['String'];
  photoFullUrl?: Maybe<Scalars['String']>;
  photoSmallUrl?: Maybe<Scalars['String']>;
  photoThumbnailUrl?: Maybe<Scalars['String']>;
  shortName: Scalars['String'];
  teamId: Scalars['Int'];
};

/** The RSVP status of a user */
export enum RsvpStatus {
  /** Indicates the user is available to attend */
  AVAILABLE = 'AVAILABLE',
  /** Indicates the user might attend */
  MAYBE = 'MAYBE',
  /** Indicates the user will not attend */
  NO = 'NO',
  /** Indicates the user has not RSVPed */
  NONE = 'NONE',
  /** Indicates the user will attend */
  YES = 'YES'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a user token */
  createUserToken?: Maybe<UserToken>;
  /** RSVP to an event */
  saveRsvp: Event;
};


export type MutationCreateUserTokenArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationSaveRsvpArgs = {
  comments?: InputMaybe<Scalars['String']>;
  eventId: Scalars['Int'];
  rsvpStatus: RsvpStatus;
  teamId: Scalars['Int'];
};

/** A user token */
export type UserToken = {
  __typename?: 'UserToken';
  /** A unique token for the user matched. Tokens are 36-character, lower-cased GUIDs. */
  token: Scalars['String'];
};

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserAvatar
// ====================================================

export interface GetUserAvatar_currentUser {
  __typename: "User";
  profilePhotoThumbnailUrl: string;
}

export interface GetUserAvatar {
  /**
   * Gets the current user
   */
  currentUser: GetUserAvatar_currentUser;
}

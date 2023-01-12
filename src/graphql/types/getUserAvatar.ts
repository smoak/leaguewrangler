import * as Types from './globalTypes';

export type GetUserAvatarQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUserAvatarQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', profilePhotoThumbnailUrl: string } };

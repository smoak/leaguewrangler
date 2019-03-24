import { get } from '../cookies';

const userTokenCookieName = 'userToken';

export type GetUserTokenFromCookies = () => string | undefined;
export const getUserTokenFromCookies: GetUserTokenFromCookies = () => {
  return get(userTokenCookieName);
};

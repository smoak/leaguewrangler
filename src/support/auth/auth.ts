const userTokenName = 'userToken';

export type GetUserToken = () => string | null;
export const getUserToken: GetUserToken = () => {
  return localStorage.getItem(userTokenName);
};

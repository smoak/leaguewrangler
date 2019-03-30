const userTokenName = 'userToken';

export type GetUserToken = () => string | null;
export const getUserToken: GetUserToken = () => {
  return localStorage.getItem(userTokenName);
};

export type SetUserToken = (token: string) => void;
export const setUserToken: SetUserToken = token => localStorage.setItem(userTokenName, token);

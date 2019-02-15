import { Action } from 'redux';

export interface SessionSetUserTokenAction extends Action {
  readonly type: 'SESSION.SET_USER_TOKEN';
  readonly payload: string;
}

export const setSessionUserToken = (token: string): SessionSetUserTokenAction => ({
  type: 'SESSION.SET_USER_TOKEN',
  payload: token,
});

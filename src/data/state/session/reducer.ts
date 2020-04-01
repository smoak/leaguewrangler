import { Reducer } from 'redux';

import { SessionSetUserTokenAction } from '../../domains/sessionSetUserToken/actions';

import { Session } from './types';

export type SessionAction = SessionSetUserTokenAction;

const initialState: Session = {};

const reducer: Reducer<Session> = (state = initialState, action: SessionAction) => {
  switch (action.type) {
    case 'SESSION.SET_USER_TOKEN':
      return {
        ...state,
        userToken: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

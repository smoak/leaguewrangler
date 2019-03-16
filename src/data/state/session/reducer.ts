import { Reducer } from 'redux';

import { Session } from './types';
import { SessionSetUserTokenAction } from '../../domains/sessionSetUserToken/actions';

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

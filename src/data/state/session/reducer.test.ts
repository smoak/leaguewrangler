import reducer, { SessionAction } from './reducer';
import { Session } from './types';

describe('reducer', () => {
  let newState: Session;
  let oldState: Session;
  let action: SessionAction;

  beforeEach(() => {
    oldState = {
      userToken: '',
    };
    newState = reducer(undefined, { type: 'UNHANLED' });
  });

  it('should return the initial state', () => {
    expect(newState).toEqual({});
  });

  describe('for an action that is unhandled', () => {
    beforeEach(() => {
      newState = reducer(oldState, { type: 'UNHANDLED' });
    });

    it('returns the old state', () => {
      expect(newState).toEqual(oldState);
    });
  });

  describe('when the user token gets updated', () => {
    beforeEach(() => {
      action = {
        type: 'SESSION.SET_USER_TOKEN',
        payload: 'foo',
      };
      newState = reducer(oldState, action);
    });

    it('returns new state', () => {
      expect(newState).toEqual({
        userToken: 'foo',
      });
    });
  });

  describe('when a user token is added to state containing another user token', () => {
    beforeEach(() => {
      oldState = {
        userToken: 'token',
      };
      action = {
        type: 'SESSION.SET_USER_TOKEN',
        payload: 'new_token',
      };
      newState = reducer(oldState, action);
    });

    it('returns new state having stale token overwritten by fresh token', () => {
      expect(newState).toEqual({
        userToken: 'new_token',
      });
    });
  });
});

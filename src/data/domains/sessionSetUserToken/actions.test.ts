import { setSessionUserToken } from './actions';

describe('actions', () => {
  describe('.setSessionUserToken', () => {
    it('should create an action to set the user token', () => {
      expect(setSessionUserToken('token')).toEqual({
        type: 'SESSION.SET_USER_TOKEN',
        payload: 'token',
      });
    });
  });
});

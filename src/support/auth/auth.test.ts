import { getUserToken, setUserToken } from './auth';

describe('auth', () => {
  describe('getUserToken', () => {
    beforeEach(() => {
      getUserToken();
    });

    it('uses localStorage', () => {
      expect(localStorage.getItem).toHaveBeenCalled();
    });
  });

  describe('setUserToken', () => {
    beforeEach(() => {
      setUserToken('foo');
    });

    it('uses localStorage to set the token', () => {
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });
});

import { getUserToken } from './auth';

describe('auth', () => {
  describe('getUserToken', () => {
    beforeEach(() => {
      getUserToken();
    });

    it('uses localStorage', () => {
      expect(localStorage.getItem).toHaveBeenCalled();
    });
  });
});

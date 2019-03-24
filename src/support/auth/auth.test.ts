jest.mock('../cookies');

import { getUserTokenFromCookies } from '.';
import { get } from '../cookies';

describe('auth', () => {
  describe('getUserTokenFromCookies', () => {
    beforeEach(() => {
      getUserTokenFromCookies();
    });

    it('uses the browsers cookies', () => {
      expect(get).toHaveBeenCalled();
    });
  });
});

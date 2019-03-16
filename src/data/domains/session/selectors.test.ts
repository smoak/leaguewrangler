import { ApplicationState } from '../../state/types';
import { isAuthenticated } from './selectors';

describe('selectors', () => {
  describe('.isAuthenticated', () => {
    let authenticated: boolean;

    describe('when there is a user token present', () => {
      beforeEach(() => {
        const state: ApplicationState = {
          session: {
            userToken: 'foo',
          },
        };

        authenticated = isAuthenticated(state);
      });

      it('should be true', () => {
        expect(authenticated).toBe(true);
      });
    });

    describe('when there is not a user token present', () => {
      beforeEach(() => {
        const state: ApplicationState = {
          session: {},
        };

        authenticated = isAuthenticated(state);
      });

      it('should be false', () => {
        expect(authenticated).toBe(false);
      });
    });
  });
});

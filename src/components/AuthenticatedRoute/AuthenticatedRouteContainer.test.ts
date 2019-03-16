import { mapStateToProps } from './AuthenticatedRouteContainer';
import { MappedStateProps } from './AuthenticatedRoute';
import { ApplicationState } from '../../data/state/types';

describe('AuthenticatedRouteContainer', () => {
  describe('.mapStateToProps', () => {
    let mappedStateProps: MappedStateProps;

    describe('when authenticated', () => {
      beforeEach(() => {
        const state: ApplicationState = {
          session: {
            userToken: 'foo',
          },
        };

        mappedStateProps = mapStateToProps(state, {});
      });

      it('maps the props', () => {
        expect(mappedStateProps.isAuthenticated).toBe(true);
      });
    });

    describe('when not authenticated', () => {
      beforeEach(() => {
        const state: ApplicationState = {
          session: {},
        };

        mappedStateProps = mapStateToProps(state, {});
      });

      it('maps the props', () => {
        expect(mappedStateProps.isAuthenticated).toBe(false);
      });
    });
  });
});
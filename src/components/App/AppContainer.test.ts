import { ApplicationState } from '../../data/state/types';

import { MappedStateProps } from './App';
import { mapStateToProps } from './AppContainer';

describe('AppContainer', () => {
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

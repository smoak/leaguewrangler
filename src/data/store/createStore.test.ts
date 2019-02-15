import { ApplicationState } from '../state/types';

import createStore from './createStore';

describe('createStore', () => {
  let state: ApplicationState;

  beforeEach(() => {
    const store = createStore();

    state = store.getState();
  });

  it('creates a store with no additional reducers', () => {
    expect(state).toMatchSnapshot();
  });
});

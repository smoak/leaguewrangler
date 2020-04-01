import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from '../state/reducers';
import { ApplicationState } from '../state/types';

const createEnhancedStore = () => {
  const rootReducer = combineReducers<ApplicationState>({
    ...reducers,
  });

  const enhancer = composeWithDevTools();

  return createStore(rootReducer, enhancer);
};

export default createEnhancedStore;

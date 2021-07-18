import { MapStateToProps, connect } from 'react-redux';

import { isAuthenticated } from '../../data/domains/session/selectors';
import { ApplicationState } from '../../data/state/types';

import App, { MappedStateProps } from './App';

export const mapStateToProps: MapStateToProps<MappedStateProps, Record<string, never>, ApplicationState> = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(App);

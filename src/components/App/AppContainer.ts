import { MapStateToProps, connect } from 'react-redux';
import { ApplicationState } from '../../data/state/types';
import { isAuthenticated } from '../../data/domains/session/selectors';
import App, { MappedStateProps } from './App';

export const mapStateToProps: MapStateToProps<MappedStateProps, {}, ApplicationState> = state => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(App);

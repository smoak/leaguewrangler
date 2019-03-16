import AuthenticatedRoute, { MappedStateProps } from './AuthenticatedRoute';
import { MapStateToProps, connect } from 'react-redux';
import { ApplicationState } from '../../data/state/types';
import { RouteProps } from 'react-router';
import { isAuthenticated } from '../../data/domains/session/selectors';

export const mapStateToProps: MapStateToProps<MappedStateProps, RouteProps, ApplicationState> = state => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(AuthenticatedRoute);

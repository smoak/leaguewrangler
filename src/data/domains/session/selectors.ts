import { ApplicationState } from '../../state/types';

export type IsAuthenticated = (state: ApplicationState) => boolean;
export const isAuthenticated: IsAuthenticated = state => !!state.session.userToken;

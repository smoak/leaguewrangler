import { Session } from './session/types';

export * from './session/types';

export interface ApplicationState {
  readonly session: Session;
}

import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from 'support/test-utils';

import { AppHeader } from './AppHeader';

describe('AppHeader', () => {
  beforeEach(() => {
    render(
      <MockedProvider>
        <AppHeader classes={{ menuButton: 'styles', grow: 'grow' }} />
      </MockedProvider>
    );
  });

  it('renders', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});

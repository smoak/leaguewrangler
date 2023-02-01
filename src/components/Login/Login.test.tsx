import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '../../support/test-utils';
import Login from './Login';

describe('Login', () => {
  beforeEach(() => {
    render(
      <MockedProvider>
        <Login />
      </MockedProvider>
    );
  });

  it('renders', () => {
    expect(screen.getByRole('heading', { level: 1, name: 'Sign in' })).toBeInTheDocument();
  });
});

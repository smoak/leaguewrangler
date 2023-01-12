import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  describe('when not authenticated', () => {
    beforeEach(() => {
      render(
        <MockedProvider>
          <App isAuthenticated={false} />
        </MockedProvider>
      );
    });

    it('renders a header', () => {
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('renders the sign in form', () => {
      expect(screen.getByRole('heading', { level: 1, name: 'Sign in' })).toBeInTheDocument();
    });
  });

  describe('when authenticated', () => {
    beforeEach(() => {
      render(
        <MockedProvider>
          <App isAuthenticated={true} />
        </MockedProvider>
      );
    });

    it('renders a header', () => {
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('does not render the sign in form', () => {
      expect(screen.queryByRole('heading', { level: 1, name: 'Sign in' })).not.toBeInTheDocument();
    });
  });
});

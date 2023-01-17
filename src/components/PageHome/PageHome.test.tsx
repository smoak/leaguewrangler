import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from 'support/test-utils';
import PageHome from './PageHome';

describe('PageHome', () => {
  beforeEach(() => {
    render(
      <MockedProvider>
        <PageHome classes={{ main: 'main' }} />
      </MockedProvider>
    );
  });

  it('renders', () => {
    expect(screen.getByRole('heading', { level: 3, name: 'Events' })).toBeInTheDocument();
  });
});

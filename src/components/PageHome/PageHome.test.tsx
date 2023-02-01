import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { PageHome } from './PageHome';

describe('PageHome', () => {
  beforeEach(() => {
    render(
      <MockedProvider>
        <PageHome />
      </MockedProvider>
    );
  });

  it('renders', () => {
    expect(screen.getByRole('heading', { level: 3, name: 'Events' })).toBeInTheDocument();
  });
});

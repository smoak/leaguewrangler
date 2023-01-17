import { render, screen } from 'support/test-utils';

import { Location } from './Location';

describe('Location', () => {
  describe('with no locationUrl', () => {
    beforeEach(() => {
      render(<Location locationName="locationName" />);
    });

    it('renders the location text', () => {
      expect(screen.getByText('locationName')).toBeInTheDocument();
    });
  });

  describe('with a locationUrl', () => {
    beforeEach(() => {
      render(<Location locationName="locationName" locationUrl="https://example.com" />);
    });

    it('renders the location text', () => {
      expect(screen.getByText('locationName')).toBeInTheDocument();
    });

    it('renders a link to the location url', () => {
      expect(screen.getByRole('link')).toBeInTheDocument();
    });
  });
});

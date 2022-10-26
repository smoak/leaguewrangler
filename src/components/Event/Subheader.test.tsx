import { render, screen } from '@testing-library/react';
import { Subheader } from './Subheader';

describe('Subheader', () => {
  describe('when start time is not provided', () => {
    let container: Element;

    beforeEach(() => {
      container = render(<Subheader />).container;
    });

    it('should be an empty render', () => {
      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('when a start time is provided', () => {
    beforeEach(() => {
      render(<Subheader startTime={1667362500} />);
    });

    it('should render a localized time format', () => {
      expect(screen.getByText('Wednesday, November 2, 2022 at 4:15 AM')).toBeInTheDocument();
    });
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RsvpStatus } from 'graphql/types/globalTypes';

import TentativeButton from './TentativeButton';

describe('TentativeButton', () => {
  describe('when rendered', () => {
    beforeEach(() => {
      render(<TentativeButton isTentative={true} onRsvp={jest.fn()} className="button" />);
    });

    it('renders a button', () => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('when the user clicks on the button', () => {
    const onRsvp = jest.fn();

    beforeEach(async () => {
      const user = userEvent.setup();
      render(<TentativeButton isTentative={false} onRsvp={onRsvp} className="button" />);

      await user.click(screen.getByRole('button'));
    });

    it('calls the onRsvp callback', () => {
      expect(onRsvp).toBeCalledWith(RsvpStatus.MAYBE);
    });
  });
});

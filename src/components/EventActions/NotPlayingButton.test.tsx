import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RsvpStatus } from 'graphql/types/globalTypes';

import NotPlayingButton from './NotPlayingButton';

describe('NotPlayingButton', () => {
  describe('when rendered', () => {
    beforeEach(() => {
      render(<NotPlayingButton isNotPlaying={true} onRsvp={jest.fn()} className="button" />);
    });

    it('renders a button', () => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('when the user clicks on the button', () => {
    const onRsvp = jest.fn();

    beforeEach(async () => {
      const user = userEvent.setup();
      render(<NotPlayingButton isNotPlaying={false} onRsvp={onRsvp} className="button" />);

      await user.click(screen.getByRole('button'));
    });

    it('calls the onRsvp callback', () => {
      expect(onRsvp).toBeCalledWith(RsvpStatus.NO);
    });
  });
});

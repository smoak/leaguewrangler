import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RsvpStatus } from '../../graphql/types/globalTypes';

import PlayingButton from './PlayingButton';

describe('PlayingButton', () => {
  describe('when the user rsvps', () => {
    let onRsvp: jest.Mock;

    beforeEach(async () => {
      onRsvp = jest.fn();
      const user = userEvent.setup();
      render(<PlayingButton isPlaying={true} className="test" onRsvp={onRsvp} />);

      await user.click(screen.getByRole('button', { name: 'Playing' }));
    });

    it('calls `onRsvp` with YES', () => {
      expect(onRsvp).toHaveBeenCalledWith(RsvpStatus.YES);
    });
  });
});

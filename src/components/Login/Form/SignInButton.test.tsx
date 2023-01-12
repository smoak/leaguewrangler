import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SignInButton from './SignInButton';

describe('SignInButton', () => {
  let onClick: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn().mockName('onClick');
    render(<SignInButton className="className" isDisabled={false} onClick={onClick} />);
  });

  describe('when clicked', () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole('button'));
    });

    it('calls the provided onClick function', () => {
      expect(onClick).toHaveBeenCalled();
    });
  });

  it('renders as expected', () => {
    expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument();
  });
});

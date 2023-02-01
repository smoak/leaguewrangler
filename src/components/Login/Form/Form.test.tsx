import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../support/test-utils';
import { MockedProvider } from '@apollo/client/testing';

import Form from './Form';
import createUserToken from 'graphql/mutations/createUserToken';
import { setUserToken } from 'support/auth';

jest.mock('support/auth');

describe('Form', () => {
  describe('when rendered', () => {
    beforeEach(() => {
      render(
        <MockedProvider>
          <Form />
        </MockedProvider>
      );
    });

    it('renders a username textbox', () => {
      expect(screen.getByRole('textbox', { name: 'Username' })).toBeInTheDocument();
    });

    it('renders a password textbox', () => {
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });
  });

  describe('when the user types in their username and password and submits the form', () => {
    const originalWindowLocation = window.location;
    const username = 'username';
    const password = 'thepassword';
    const token = 'token';
    const mocks = [
      {
        request: {
          query: createUserToken,
          variables: {
            username,
            password,
          },
        },
        result: {
          data: {
            createUserToken: {
              token,
            },
          },
        },
      },
    ];
    const reload = jest.fn();

    beforeAll(() => {
      Object.defineProperty(window, 'location', {
        configurable: true,
        value: { reload },
      });
    });

    beforeEach(async () => {
      const user = userEvent.setup();

      render(
        <MockedProvider mocks={mocks}>
          <Form />
        </MockedProvider>
      );

      await user.type(screen.getByRole('textbox', { name: 'Username' }), username);
      await user.type(screen.getByLabelText(/password/i), password);
      await user.click(screen.getByRole('button', { name: 'Sign in' }));
    });

    afterAll(() => {
      Object.defineProperty(window, 'location', { configurable: true, value: originalWindowLocation });
    });

    it('sets the user token', () => {
      expect(setUserToken).toHaveBeenCalledWith(token);
    });

    it('reloads the page', () => {
      expect(reload).toHaveBeenCalled();
    });
  });
});

jest.mock('support/auth');
jest.mock('./hooks');

import { ApolloError } from 'apollo-boost';
import { ShallowWrapper, shallow } from 'enzyme';
import { CreateUserToken } from 'graphql/types/CreateUserToken';
import React from 'react';
import { useMutation } from 'react-apollo';
import { setUserToken } from 'support/auth';

import Form from './Form';
import SignInButton from './SignInButton';
import { useControlledInput } from './hooks';

describe('Form', () => {
  let component: ShallowWrapper;
  let createUserTokenMutation: jest.Mock;
  let data: CreateUserToken;
  let error: ApolloError | undefined;
  let loading: boolean;

  beforeEach(() => {
    loading = false;
    createUserTokenMutation = jest.fn();
    (useMutation as jest.Mock).mockReturnValue([createUserTokenMutation, { data, error, loading }]);
    (useControlledInput as jest.Mock).mockReturnValue({ value: '', onChange: jest.fn() });

    component = shallow(<Form formClassname="form" submitButtonClassname="submit" />);
  });

  describe('when the username and password are provided', () => {
    beforeEach(() => {
      (useControlledInput as jest.Mock).mockReturnValue({ value: 'foo', onChange: jest.fn() });
      component = shallow(<Form formClassname="form" submitButtonClassname="submit" />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the user submits the form', () => {
    beforeEach(() => {
      (useControlledInput as jest.Mock).mockReturnValue({ value: 'foo', onChange: jest.fn() });
      component = shallow(<Form formClassname="form" submitButtonClassname="submit" />);
      component.find(SignInButton).simulate('click');
    });

    describe('and the token is being created', () => {
      beforeEach(() => {
        loading = true;
        (useMutation as jest.Mock).mockReturnValue([createUserTokenMutation, { data, error, loading }]);
        component = shallow(<Form formClassname="form" submitButtonClassname="submit" />);
      });

      it('renders as expected', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('and the token was created', () => {
      const token = 'token';

      beforeEach(() => {
        delete window.location;
        window.location = { reload: jest.fn() };
        data = {
          createUserToken: {
            __typename: 'UserToken',
            token,
          },
        };
        loading = true;
        (useMutation as jest.Mock).mockReturnValue([createUserTokenMutation, { data, error, loading }]);
        component = shallow(<Form formClassname="form" submitButtonClassname="submit" />);
      });

      it('sets the user token', () => {
        expect(setUserToken).toHaveBeenCalledWith(token);
      });

      it('reloads the page', () => {
        expect(window.location.reload).toHaveBeenCalled();
      });
    });

    it('creates the user token', () => {
      expect(createUserTokenMutation).toHaveBeenCalledWith({ variables: { username: 'foo', password: 'foo' } });
    });
  });

  it('renders as expected', () => {
    expect(component).toMatchSnapshot();
  });
});

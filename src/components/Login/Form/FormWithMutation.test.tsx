jest.mock('../../../support/auth');

import React from 'react';
import FormWithMutation, { FormWithMutationProps, SignInMutation } from './FormWithMutation';
import { ShallowWrapper, shallow, ReactWrapper, mount } from 'enzyme';
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils';
import wait from 'waait';

import { setUserToken } from '../../../support/auth';
import Form from './Form';
import createUserToken from '../../../graphql/mutations/createUserToken';

describe('FormWithMutation', () => {
  let component: ShallowWrapper<FormWithMutationProps>;

  beforeEach(() => {
    component = shallow(<FormWithMutation formClassname="form" submitButtonClassname="submit" />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });

  describe('when the form sign in callback is executed', () => {
    let wrappedComponent: ReactWrapper;

    beforeEach(async () => {
      Object.defineProperty(window.location, 'reload', {
        configurable: true,
      });
      window.location.reload = jest.fn();

      const mocks: ReadonlyArray<MockedResponse> = [
        {
          request: {
            query: createUserToken,
            variables: {
              username: 'foo',
              password: 'bar',
            },
          },
          result: {
            data: {
              createUserToken: {
                token: 'foo',
              },
            },
          },
        },
      ];
      wrappedComponent = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <FormWithMutation formClassname="form" submitButtonClassname="submit" />
        </MockedProvider>
      );

      wrappedComponent.find(Form).prop('onSignInClicked')('foo', 'bar');

      await wait(0);
    });

    it('sets the users token', () => {
      expect(setUserToken).toHaveBeenCalledWith('foo');
    });

    it('reloads the page', () => {
      expect(window.location.reload).toHaveBeenCalled();
    });
  });

  describe('when the mutation completes', () => {
    beforeEach(async () => {
      Object.defineProperty(window.location, 'reload', {
        configurable: true,
      });
      window.location.reload = jest.fn();

      component = shallow(<FormWithMutation formClassname="form" submitButtonClassname="submit" />);
      (component.find(SignInMutation).prop('onCompleted') as SignInMutation['onMutationCompleted'])({
        createUserToken: { token: 'foo' },
      });
    });

    it('sets the users token', () => {
      expect(setUserToken).toHaveBeenCalledWith('foo');
    });

    it('reloads the page', () => {
      expect(window.location.reload).toHaveBeenCalled();
    });
  });
});

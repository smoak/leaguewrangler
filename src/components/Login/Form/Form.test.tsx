import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { InputProps } from '@material-ui/core/Input';
import { Button } from '@material-ui/core';

import Form from './Form';

describe('Form', () => {
  let component: ShallowWrapper;
  let onSignInClicked: jest.Mock;

  beforeEach(() => {
    onSignInClicked = jest.fn().mockName('onSignInClicked');
    component = shallow(<Form formClassname="form" submitButtonClassname="submit" onSignInClicked={onSignInClicked} />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });

  describe('when username is changed', () => {
    beforeEach(() => {
      const event = { target: { value: 'foo' } };
      component = shallow(
        <Form formClassname="form" submitButtonClassname="submit" onSignInClicked={onSignInClicked} />
      );
      component.find('#username').simulate('change', event);
    });

    it('updates the input value', () => {
      expect(component.find('#username').prop<InputProps>('value')).toEqual('foo');
    });
  });

  describe('when password is changed', () => {
    beforeEach(() => {
      const event = { target: { value: 'bar' } };
      component = shallow(
        <Form formClassname="form" submitButtonClassname="submit" onSignInClicked={onSignInClicked} />
      );
      component.find('#password').simulate('change', event);
    });

    it('updates the input value', () => {
      expect(component.find('#password').prop<InputProps>('value')).toEqual('bar');
    });
  });

  describe('when the user clicks the sign in button', () => {
    beforeEach(() => {
      component = shallow(
        <Form formClassname="form" submitButtonClassname="submit" onSignInClicked={onSignInClicked} />
      );
      const button = component.find(Button);
      const event = { preventDefault: jest.fn() };
      button.simulate('click', event);
    });

    it('calls onSignInClicked with the username and password', () => {
      expect(onSignInClicked).toHaveBeenCalledWith('', '');
    });
  });
});

import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Form } from '.';
import { InputProps } from '@material-ui/core/Input';

describe('Form', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Form formClassname="form" submitButtonClassname="submit" />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });

  describe('when username is changed', () => {
    beforeEach(() => {
      const event = { target: { value: 'foo' } };
      component = shallow(<Form formClassname="form" submitButtonClassname="submit" />);
      component.find('#username').simulate('change', event);
    });

    it('updates the input value', () => {
      expect(component.find('#username').prop<InputProps>('value')).toEqual('foo');
    });
  });

  describe('when password is changed', () => {
    beforeEach(() => {
      const event = { target: { value: 'bar' } };
      component = shallow(<Form formClassname="form" submitButtonClassname="submit" />);
      component.find('#password').simulate('change', event);
    });

    it('updates the input value', () => {
      expect(component.find('#password').prop<InputProps>('value')).toEqual('bar');
    });
  });
});

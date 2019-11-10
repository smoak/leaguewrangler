import Button from '@material-ui/core/Button';
import { ShallowWrapper, shallow } from 'enzyme';
import React from 'react';

import SignInButton from './SignInButton';

describe('SignInButton', () => {
  let component: ShallowWrapper;
  let onClick: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn().mockName('onClick');
    component = shallow(<SignInButton className="className" isDisabled={false} onClick={onClick} />);
  });

  describe('when clicked', () => {
    let preventDefault: jest.Mock;

    beforeEach(() => {
      preventDefault = jest.fn();
      const event = { preventDefault };
      component.find(Button).simulate('click', event);
    });

    it('prevents the default event', () => {
      expect(preventDefault).toHaveBeenCalled();
    });

    it('calls the provided onClick function', () => {
      expect(onClick).toHaveBeenCalled();
    });
  });

  it('renders as expected', () => {
    expect(component).toMatchSnapshot();
  });
});

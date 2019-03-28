import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Form } from '.';

describe('Form', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Form formClassname="form" submitButtonClassname="submit" />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

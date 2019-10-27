import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import TentativeButton from './TentativeButton';

describe('TentativeButton', () => {
  let component: ShallowWrapper;

  describe('when tentative', () => {
    beforeEach(() => {
      component = shallow(<TentativeButton isTentative={true} className="test" />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when not tentative', () => {
    beforeEach(() => {
      component = shallow(<TentativeButton isTentative={false} className="test" />);
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

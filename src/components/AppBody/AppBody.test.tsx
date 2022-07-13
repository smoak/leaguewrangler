import { ShallowWrapper, shallow } from 'enzyme';

import AppBody from './AppBody';

describe('AppBody', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<AppBody />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

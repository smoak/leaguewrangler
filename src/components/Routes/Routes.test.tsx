import { ShallowWrapper, shallow } from 'enzyme';

import Routes from '.';

describe('Routes', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Routes />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

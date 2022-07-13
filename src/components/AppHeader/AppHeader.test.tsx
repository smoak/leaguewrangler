import { ShallowWrapper, shallow } from 'enzyme';

import { AppHeader } from './AppHeader';

describe('AppHeader', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<AppHeader classes={{ menuButton: 'styles', grow: 'grow' }} />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

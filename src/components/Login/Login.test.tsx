import { ShallowWrapper, shallow } from 'enzyme';
import { Login } from './Login';

describe('Login', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(
      <Login classes={{ main: 'main', avatar: 'avatar', form: 'form', submit: 'submit', paper: 'paper' }} />
    );
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

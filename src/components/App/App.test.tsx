import { ShallowWrapper, shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  let component: ShallowWrapper;

  describe('when not authenticated', () => {
    beforeEach(() => {
      component = shallow(<App isAuthenticated={false} />);
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when authenticated', () => {
    beforeEach(() => {
      component = shallow(<App isAuthenticated={true} />);
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

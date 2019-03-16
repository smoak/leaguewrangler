import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import AuthenticatedRoute from './AuthenticatedRoute';

describe('AuthenticatedRoute', () => {
  let component: ShallowWrapper;

  describe('when not authenticated', () => {
    beforeEach(() => {
      component = shallow(<AuthenticatedRoute isAuthenticated={false} component={() => <>hey</>} />);
    });

    it('redirects to the login page', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when authenticated', () => {
    beforeEach(() => {
      component = shallow(<AuthenticatedRoute isAuthenticated={true} component={() => <>hey</>} />);
    });

    it('renders the component provided to the route', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

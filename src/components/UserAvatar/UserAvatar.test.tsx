import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import UserAvatar from './UserAvatar';
import { useQuery } from 'react-apollo';

describe('UserAvatar', () => {
  let component: ShallowWrapper;

  describe('when the component is fetching data', () => {
    beforeEach(() => {
      (useQuery as jest.Mock).mockReturnValue({ loading: true, data: undefined });
      component = shallow(<UserAvatar classes={{ avatar: 'avatar' }} />).dive();
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the user does not have an avatar', () => {
    beforeEach(() => {
      (useQuery as jest.Mock).mockReturnValue({ loading: false, data: {} });
      component = shallow(<UserAvatar classes={{ avatar: 'avatar' }} />).dive();
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the user does have an avatar', () => {
    beforeEach(() => {
      const currentUser = {
        profilePhotoThumbnailUrl: 'foo',
      };
      (useQuery as jest.Mock).mockReturnValue({ loading: false, data: { currentUser } });
      component = shallow(<UserAvatar classes={{ avatar: 'avatar' }} />).dive();
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

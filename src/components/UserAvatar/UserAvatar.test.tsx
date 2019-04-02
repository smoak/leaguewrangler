import React from 'react';
import UserAvatar, { UserAvatarProps } from './UserAvatar';
import { shallow, ShallowWrapper, ReactWrapper, mount } from 'enzyme';
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils';
import getUserAvatar from '../../graphql/queries/getUserAvatar';
import wait from 'waait';

describe('UserAvatar', () => {
  let component: ShallowWrapper<UserAvatarProps>;

  beforeEach(() => {
    component = shallow(<UserAvatar />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });

  describe('when the component is fetching data', () => {
    let mountedComponent: ReactWrapper;

    beforeEach(() => {
      mountedComponent = mount(
        <MockedProvider mocks={[]}>
          <UserAvatar />
        </MockedProvider>
      );
    });

    it('renders a loading indicator', () => {
      expect(mountedComponent).toMatchSnapshot();
    });
  });

  describe('when the user does not have an avatar', () => {
    let mountedComponent: ReactWrapper;

    beforeEach(async () => {
      const mocks: ReadonlyArray<MockedResponse> = [
        {
          request: {
            query: getUserAvatar,
          },
          result: {},
        },
      ];
      mountedComponent = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <UserAvatar />
        </MockedProvider>
      );

      await wait(0);

      mountedComponent.update();
    });

    it('renders a placeholder', () => {
      expect(mountedComponent).toMatchSnapshot();
    });
  });

  describe('when the user does have an avatar', () => {
    let mountedComponent: ReactWrapper;

    beforeEach(async () => {
      const mocks: ReadonlyArray<MockedResponse> = [
        {
          request: {
            query: getUserAvatar,
          },
          result: {
            data: {
              currentUser: {
                profilePhotoThumbnailUrl: 'foo',
              },
            },
          },
        },
      ];
      mountedComponent = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <UserAvatar />
        </MockedProvider>
      );

      await wait(0);

      mountedComponent.update();
    });

    it('renders a placeholder', () => {
      expect(mountedComponent).toMatchSnapshot();
    });
  });
});

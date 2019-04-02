import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import { MockedResponse, MockedProvider } from 'react-apollo/test-utils';

import TeamSelect from './TeamSelect';
import wait from 'waait';
import getTeams from '../../graphql/queries/getTeams';

describe('TeamSelect', () => {
  let component: ReactWrapper;
  let mocks: ReadonlyArray<MockedResponse>;

  beforeEach(async () => {
    mocks = [
      {
        request: {
          query: getTeams,
        },
        result: {
          data: {
            teams: [
              {
                teamId: 1,
                name: 'Team',
              },
            ],
          },
        },
      },
    ];
    component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TeamSelect />
      </MockedProvider>
    );

    await wait(0);

    component = component.update();
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });

  describe('when the server does not return teams', () => {
    beforeEach(async () => {
      mocks = [
        {
          request: {
            query: getTeams,
          },
          result: {},
        },
      ];
      component = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <TeamSelect />
        </MockedProvider>
      );

      await wait(0);

      component = component.update();
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the user has no teams', () => {
    beforeEach(async () => {
      mocks = [
        {
          request: {
            query: getTeams,
          },
          result: {
            data: {
              teams: [],
            },
          },
        },
      ];
      component = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <TeamSelect />
        </MockedProvider>
      );

      await wait(0);

      component = component.update();
    });

    it('renders', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import getTeams from '../../graphql/queries/getTeams';

import TeamSelect from './TeamSelect';

const mocksWithTeams: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: getTeams,
    },
    result: {
      data: {
        teams: [
          {
            teamId: 1,
            name: 'Team 1',
          },
          {
            teamId: 2,
            name: 'Team 2',
          },
        ],
      },
    },
  },
];

storiesOf('TeamSelect', module).add('with teams', () => (
  <MockedProvider mocks={mocksWithTeams} addTypename={false}>
    <TeamSelect />
  </MockedProvider>
));

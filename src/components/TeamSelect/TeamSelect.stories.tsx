import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { MockedResponse } from 'react-apollo/test-links';
import { MockedProvider } from 'react-apollo/test-utils';
import TeamSelect from './TeamSelect';
import getTeams from '../../graphql/queries/getTeams';

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
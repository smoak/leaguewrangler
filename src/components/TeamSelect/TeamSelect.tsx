import { useQuery } from '@apollo/react-hooks';
import React, { FC } from 'react';
import { CircularProgress, Select, MenuItem, FormControl } from '@material-ui/core';

import getTeamsQuery from 'graphql/queries/getTeams';
import { GetTeams } from 'graphql/types/GetTeams';

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const TeamSelect: FC = () => {
  const { loading, data, error } = useQuery<GetTeams>(getTeamsQuery);

  if (loading) {
    return <CircularProgress color="secondary" />;
  }

  if (!data || error) {
    return null;
  }

  const { teams } = data;

  const firstTeam = teams[0];

  return (
    <FormControl>
      <Select value={firstTeam ? firstTeam.id : ''} name="team">
        {teams.filter(notEmpty).map(team => (
          <MenuItem key={team.id} value={team.id}>
            {team.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TeamSelect;

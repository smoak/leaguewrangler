import { useQuery } from '@apollo/client';
import { CircularProgress, FormControl, MenuItem, Select } from '@mui/material';
import { FC } from 'react';

import getTeamsQuery from '../../graphql/queries/getTeams';
import { GetTeamsQuery } from '../../graphql/types/getTeams';

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const TeamSelect: FC = () => {
  const { loading, data, error } = useQuery<GetTeamsQuery>(getTeamsQuery);

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
        {teams.filter(notEmpty).map((team) => (
          <MenuItem key={team.id} value={team.id}>
            {team.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TeamSelect;

import React, { FC } from 'react';
import { GetTeams } from '../../graphql/types/GetTeams';
import { ChildDataProps, withQuery } from 'react-apollo';
import { CircularProgress, Select, MenuItem, FormControl } from '@material-ui/core';
import getTeams from '../../graphql/queries/getTeams';

export type TeamSelectProps = ChildDataProps<{}, GetTeams, {}>;

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const TeamSelect: FC<TeamSelectProps> = ({ data: { loading, teams } }) => {
  if (loading) {
    return <CircularProgress color="secondary" />;
  }

  const notEmptyTeams = teams ? teams.filter(notEmpty) : [];
  const firstTeam = notEmptyTeams[0];

  return (
    <FormControl>
      <Select value={firstTeam ? firstTeam.teamId : ''} name="team">
        {notEmptyTeams.map(team => (
          <MenuItem key={team.teamId} value={team.teamId}>
            {team.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default withQuery<{}, GetTeams, {}>(getTeams)(TeamSelect);

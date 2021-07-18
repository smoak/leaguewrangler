import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';

interface LocationProps {
  readonly locationName: string;
  readonly locationUrl?: string;
}

export const Location: FC<LocationProps> = ({ locationName, locationUrl }) => {
  if (!locationUrl) {
    <Typography component="p">{locationName}</Typography>;
  }

  return (
    <Typography component="p">
      <Link href={locationUrl} target="_blank" rel="noreferrer">
        {locationName}
      </Link>
    </Typography>
  );
};

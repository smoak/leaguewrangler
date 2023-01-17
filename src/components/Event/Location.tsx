import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

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

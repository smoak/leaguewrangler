import { Avatar, CardActions, CardContent, CardHeader } from '@mui/material';
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import Card from '@mui/material/Card';
import { FC } from 'react';

import { RsvpStatus } from '../../graphql/types/globalTypes';
import EventActions from '../EventActions';

import { Location } from './Location';
import styles from './styles';
import { Subheader } from './Subheader';

export interface OwnProps {
  readonly eventId: number;
  readonly location: string;
  readonly locationMapsUrl?: string;
  readonly rsvpStatus: RsvpStatus;
  readonly startTime?: number;
  readonly teamId: number;
  readonly teamPhotoUrl: string | null;
  readonly title: string;
}

export type EventProps = WithStyles<typeof styles> & OwnProps;

export const Event: FC<EventProps> = ({
  classes,
  eventId,
  location,
  locationMapsUrl,
  rsvpStatus,
  startTime,
  teamId,
  teamPhotoUrl,
  title,
}) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label="teamPhoto" src={teamPhotoUrl ?? ''} />}
        title={title}
        subheader={<Subheader startTime={startTime} />}
      />
      <CardContent>
        <Location locationName={location} locationUrl={locationMapsUrl} />
      </CardContent>
      <CardActions disableSpacing>
        <EventActions rsvpStatus={rsvpStatus} teamId={teamId} eventId={eventId} />
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Event);

import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import { Avatar, CardActions, CardContent, CardHeader, Typography, WithStyles, withStyles } from '@material-ui/core';
import Moment from 'react-moment';
import { RsvpStatus } from 'graphql/types/globalTypes';

import EventActions from '../EventActions';
import styles from './styles';

export interface OwnProps {
  readonly endTime?: Date;
  readonly eventId: number;
  readonly location: string;
  readonly locationMapsUrl?: string;
  readonly rsvpStatus: RsvpStatus;
  readonly startTime?: Date;
  readonly teamId: number;
  readonly teamPhotoUrl: string | null;
  readonly title: string;
}

export type EventProps = WithStyles<typeof styles> & OwnProps;

export const Event: FC<EventProps> = ({
  classes,
  eventId,
  location,
  rsvpStatus,
  startTime,
  teamId,
  teamPhotoUrl,
  title,
}) => {
  const subheader = startTime ? <Moment format="LLLL" date={startTime} /> : null;
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label="teamPhoto" src={teamPhotoUrl ? teamPhotoUrl : ''} />}
        title={title}
        subheader={subheader}
      />
      <CardContent>
        <Typography component="p">{location}</Typography>
      </CardContent>
      <CardActions>
        <EventActions rsvpStatus={rsvpStatus} teamId={teamId} eventId={eventId} />
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Event);

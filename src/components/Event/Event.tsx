import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import { Avatar, CardActions, CardContent, CardHeader, Typography, WithStyles, withStyles } from '@material-ui/core';
import Moment from 'react-moment';
import { RsvpStatus } from 'graphql/types/globalTypes';

import EventActions from '../EventActions';
import styles from './styles';

export interface OwnProps {
  readonly title: string;
  readonly startTime?: Date;
  readonly endTime?: Date;
  readonly teamPhotoUrl: string | null;
  readonly location: string;
  readonly locationMapsUrl?: string;
  readonly rsvpStatus: RsvpStatus;
}

export type EventProps = WithStyles<typeof styles> & OwnProps;

export const Event: FC<EventProps> = ({ classes, title, teamPhotoUrl, startTime, location, rsvpStatus }) => {
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
        <EventActions rsvpStatus={rsvpStatus} />
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Event);

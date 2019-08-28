import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import {
  CardHeader,
  Avatar,
  WithStyles,
  createStyles,
  withStyles,
  CardContent,
  Typography,
  CardActions,
} from '@material-ui/core';
import Moment from 'react-moment';
import { RsvpStatus } from 'graphql/types/globalTypes';
import PlayingButton from './PlayingButton';
import TentativeButton from './TentativeButton';
import NotPlayingButton from './NotPlayingButton';

export interface OwnProps {
  readonly title: string;
  readonly startTime?: Date;
  readonly endTime?: Date;
  readonly teamPhotoUrl: string | null;
  readonly location: string;
  readonly locationMapsUrl?: string;
  readonly rsvpStatus: RsvpStatus;
}

const styles = () =>
  createStyles({
    card: {
      width: '100%',
    },
    icon: {
      fontSize: 40,
    },
  });

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
        <PlayingButton className={classes.icon} isPlaying={rsvpStatus === RsvpStatus.YES} />
        <TentativeButton className={classes.icon} isTentative={rsvpStatus === RsvpStatus.MAYBE} />
        <NotPlayingButton className={classes.icon} isNotPlaying={rsvpStatus === RsvpStatus.NO} />
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Event);

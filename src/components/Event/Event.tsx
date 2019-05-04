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
  IconButton,
} from '@material-ui/core';
import PlayingIcon from '@material-ui/icons/CheckCircleOutline';
import TentativeIcon from '@material-ui/icons/HelpOutlineOutlined';
import NotPlayingIcon from '@material-ui/icons/HighlightOffOutlined';

export interface OwnProps {
  readonly title: string;
  readonly startTime: Date;
  readonly endTime?: Date;
  readonly teamPhotoUrl: string;
  readonly location: string;
  readonly locationMapsUrl?: string;
}

const styles = () =>
  createStyles({
    card: {
      maxWidth: 400,
    },
    icon: {
      fontSize: 40,
    },
  });

export type EventProps = WithStyles<typeof styles> & OwnProps;

const formatDateTime = (dateTime: Date) => {
  return new Intl.DateTimeFormat(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
  }).format(dateTime);
};

export const Event: FC<EventProps> = ({ classes, title, teamPhotoUrl, startTime, location }) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label="teamPhoto" src={teamPhotoUrl} />}
        title={title}
        subheader={formatDateTime(startTime)}
      />
      <CardContent>
        <Typography component="p">{location}</Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Playing">
          <PlayingIcon className={classes.icon} />
        </IconButton>
        <IconButton aria-label="Tentative">
          <TentativeIcon className={classes.icon} />
        </IconButton>
        <IconButton aria-label="Not Playing">
          <NotPlayingIcon className={classes.icon} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Event);

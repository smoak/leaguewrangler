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
import Moment from 'react-moment';

export interface OwnProps {
  readonly title: string;
  readonly startTime?: Date;
  readonly endTime?: Date;
  readonly teamPhotoUrl: string | null;
  readonly location: string;
  readonly locationMapsUrl?: string;
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

export const Event: FC<EventProps> = ({ classes, title, teamPhotoUrl, startTime, location }) => {
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

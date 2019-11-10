import React, { FC } from 'react';
import { RsvpStatus } from 'graphql/types/globalTypes';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';

import PlayingButton from './PlayingButton';
import TentativeButton from './TentativeButton';
import NotPlayingButton from './NotPlayingButton';

interface OwnProps {
  readonly rsvpStatus: RsvpStatus;
}

const styles = createStyles({
  icon: {
    fontSize: 40,
  },
});

type EventActionsProps = WithStyles<typeof styles> & OwnProps;

export const EventActions: FC<EventActionsProps> = ({ classes, rsvpStatus }) => {
  return (
    <>
      <PlayingButton className={classes.icon} isPlaying={rsvpStatus === RsvpStatus.YES} />
      <TentativeButton className={classes.icon} isTentative={rsvpStatus === RsvpStatus.MAYBE} />
      <NotPlayingButton className={classes.icon} isNotPlaying={rsvpStatus === RsvpStatus.NO} />
    </>
  );
};

export default withStyles(styles)(EventActions);

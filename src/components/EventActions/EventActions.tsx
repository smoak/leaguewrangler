import { CircularProgress, WithStyles, createStyles, withStyles } from '@material-ui/core';
import { FC } from 'react';

import { RsvpStatus } from '../../graphql/types/globalTypes';

import NotPlayingButton from './NotPlayingButton';
import PlayingButton from './PlayingButton';
import TentativeButton from './TentativeButton';
import { useSaveRsvpMutation } from './hooks';

interface OwnProps {
  readonly eventId: number;
  readonly rsvpStatus: RsvpStatus;
  readonly teamId: number;
}

const styles = createStyles({
  icon: {
    fontSize: 30,
  },
});

type EventActionsProps = WithStyles<typeof styles> & OwnProps;

export const EventActions: FC<EventActionsProps> = ({ classes, eventId, teamId, rsvpStatus }) => {
  const { loading, saveRsvpCallback } = useSaveRsvpMutation({ teamId, eventId });

  if (loading) {
    return <CircularProgress className={classes.icon} color="secondary" />;
  }

  return (
    <>
      <PlayingButton className={classes.icon} isPlaying={rsvpStatus === RsvpStatus.YES} onRsvp={saveRsvpCallback} />
      <TentativeButton
        className={classes.icon}
        isTentative={rsvpStatus === RsvpStatus.MAYBE}
        onRsvp={saveRsvpCallback}
      />
      <NotPlayingButton
        className={classes.icon}
        isNotPlaying={rsvpStatus === RsvpStatus.NO}
        onRsvp={saveRsvpCallback}
      />
    </>
  );
};

export default withStyles(styles)(EventActions);

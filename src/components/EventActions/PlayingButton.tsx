import { IconButton } from '@material-ui/core';
import PlayingIcon from '@material-ui/icons/CheckCircleOutline';
import RsvpedPlayingIcon from '@material-ui/icons/CheckCircleTwoTone';
import { FC, useCallback } from 'react';

import { RsvpStatus } from '../../graphql/types/globalTypes';

interface PlayingButtonProps {
  readonly isPlaying: boolean;
  readonly className: string;
  onRsvp(rsvpStatus: RsvpStatus): void;
}

const PlayingButton: FC<PlayingButtonProps> = ({ isPlaying, className, onRsvp }) => {
  const rsvpCallback = useCallback(() => {
    onRsvp(RsvpStatus.YES);
  }, [onRsvp]);
  const icon = isPlaying ? (
    <RsvpedPlayingIcon className={className} color="primary" />
  ) : (
    <PlayingIcon className={className} />
  );

  return (
    <IconButton aria-label="Playing" onClick={rsvpCallback}>
      {icon}
    </IconButton>
  );
};

export default PlayingButton;

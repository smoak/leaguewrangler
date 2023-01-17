import { IconButton } from '@mui/material';
import PlayingIcon from '@mui/icons-material/CheckCircleOutline';
import RsvpedPlayingIcon from '@mui/icons-material/CheckCircleTwoTone';
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
    <IconButton aria-label="Playing" onClick={rsvpCallback} size="large">
      {icon}
    </IconButton>
  );
};

export default PlayingButton;

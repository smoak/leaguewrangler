import { IconButton } from '@mui/material';
import NotPlayingIcon from '@mui/icons-material/HighlightOff';
import RsvpedNotPlayingIcon from '@mui/icons-material/HighlightOffTwoTone';
import { FC, useCallback } from 'react';

import { RsvpStatus } from '../../graphql/types/globalTypes';

interface NotPlayingButtonProps {
  readonly isNotPlaying: boolean;
  readonly className: string;
  onRsvp(rsvpStatus: RsvpStatus): void;
}

const NotPlayingButton: FC<NotPlayingButtonProps> = ({ className, isNotPlaying, onRsvp }) => {
  const rsvpCallback = useCallback(() => {
    onRsvp(RsvpStatus.NO);
  }, [onRsvp]);

  const icon = isNotPlaying ? (
    <RsvpedNotPlayingIcon className={className} color="primary" />
  ) : (
    <NotPlayingIcon className={className} />
  );

  return (
    <IconButton aria-label="Not Playing" onClick={rsvpCallback} size="large">
      {icon}
    </IconButton>
  );
};

export default NotPlayingButton;

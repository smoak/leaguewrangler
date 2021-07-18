import { IconButton } from '@material-ui/core';
import NotPlayingIcon from '@material-ui/icons/HighlightOff';
import RsvpedNotPlayingIcon from '@material-ui/icons/HighlightOffTwoTone';
import React, { FC, useCallback } from 'react';

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
    <IconButton aria-label="Not Playing" onClick={rsvpCallback}>
      {icon}
    </IconButton>
  );
};

export default NotPlayingButton;

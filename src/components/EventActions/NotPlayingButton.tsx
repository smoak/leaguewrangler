import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import NotPlayingIcon from '@material-ui/icons/HighlightOff';
import RsvpedNotPlayingIcon from '@material-ui/icons/HighlightOffTwoTone';

interface NotPlayingButtonProps {
  readonly isNotPlaying: boolean;
  readonly className: string;
}

const NotPlayingButton: FC<NotPlayingButtonProps> = ({ className, isNotPlaying }) => {
  const icon = isNotPlaying ? (
    <RsvpedNotPlayingIcon className={className} color="primary" />
  ) : (
    <NotPlayingIcon className={className} />
  );

  return <IconButton aria-label="Not Playing">{icon}</IconButton>;
};

export default NotPlayingButton;

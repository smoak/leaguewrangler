import React, { FC } from 'react';
import PlayingIcon from '@material-ui/icons/CheckCircleOutline';
import RsvpedPlayingIcon from '@material-ui/icons/CheckCircle';
import { IconButton } from '@material-ui/core';

interface PlayingButtonProps {
  readonly isPlaying: boolean;
  readonly className: string;
}

const PlayingButton: FC<PlayingButtonProps> = ({ isPlaying, className }) => {
  const icon = isPlaying ? <RsvpedPlayingIcon className={className} /> : <PlayingIcon className={className} />;

  return <IconButton aria-label="Playing">{icon}</IconButton>;
};

export default PlayingButton;

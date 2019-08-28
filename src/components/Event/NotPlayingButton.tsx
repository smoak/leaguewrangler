import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import NotPlayingIcon from '@material-ui/icons/ReportOffOutlined';
import RsvpedNotPlayingIcon from '@material-ui/icons/ReportOff';

interface NotPlayingButtonProps {
  readonly isNotPlaying: boolean;
  readonly className: string;
}

const NotPlayingButton: FC<NotPlayingButtonProps> = ({ className, isNotPlaying }) => {
  const icon = isNotPlaying ? <RsvpedNotPlayingIcon className={className} /> : <NotPlayingIcon className={className} />;

  return <IconButton aria-label="Not Playing">{icon}</IconButton>;
};

export default NotPlayingButton;

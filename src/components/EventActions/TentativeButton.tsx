import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import TentativeIcon from '@material-ui/icons/HelpOutlineOutlined';
import RsvpedTentativeIcon from '@material-ui/icons/Help';

interface TentativeButtonProps {
  readonly isTentative: boolean;
  readonly className: string;
}

const TentativeButton: FC<TentativeButtonProps> = ({ className, isTentative }) => {
  const icon = isTentative ? <RsvpedTentativeIcon className={className} /> : <TentativeIcon className={className} />;
  return <IconButton aria-label="Tentative">{icon}</IconButton>;
};

export default TentativeButton;

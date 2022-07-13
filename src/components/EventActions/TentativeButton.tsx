import { IconButton } from '@material-ui/core';
import TentativeIcon from '@material-ui/icons/HelpOutlineOutlined';
import RsvpedTentativeIcon from '@material-ui/icons/HelpTwoTone';
import { FC, useCallback } from 'react';

import { RsvpStatus } from '../../graphql/types/globalTypes';

interface TentativeButtonProps {
  readonly isTentative: boolean;
  readonly className: string;
  onRsvp(rsvpStatus: RsvpStatus): void;
}

const TentativeButton: FC<TentativeButtonProps> = ({ onRsvp, className, isTentative }) => {
  const rsvpCallback = useCallback(() => {
    onRsvp(RsvpStatus.MAYBE);
  }, [onRsvp]);

  const icon = isTentative ? (
    <RsvpedTentativeIcon className={className} color="primary" />
  ) : (
    <TentativeIcon className={className} />
  );
  return (
    <IconButton aria-label="Tentative" onClick={rsvpCallback}>
      {icon}
    </IconButton>
  );
};

export default TentativeButton;

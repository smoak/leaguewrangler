import { IconButton } from '@mui/material';
import TentativeIcon from '@mui/icons-material/HelpOutlineOutlined';
import RsvpedTentativeIcon from '@mui/icons-material/HelpTwoTone';
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
    <IconButton aria-label="Tentative" onClick={rsvpCallback} size="large">
      {icon}
    </IconButton>
  );
};

export default TentativeButton;

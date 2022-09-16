import { FC } from 'react';

export type SubheaderProps = {
  readonly startTime?: number;
};

export const Subheader: FC<SubheaderProps> = ({ startTime }) => {
  if (!startTime) {
    return null;
  }

  // TODO: fix this on the server
  // the server sends timestamps that are
  // SECONDS since epoch, not MILLISECONDS
  // so we must convert to ms until ther
  // server is fixed.
  const fixedTime = startTime * 1000;

  return (
    <time dateTime={fixedTime.toString()}>
      {new Intl.DateTimeFormat(navigator.language, { dateStyle: 'full', timeStyle: 'short' }).format(
        new Date(fixedTime)
      )}
    </time>
  );
};

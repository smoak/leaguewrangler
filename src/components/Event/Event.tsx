import { Avatar, CardActions, CardContent, CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import { FC } from 'react';

import { RsvpStatus } from '../../graphql/types/globalTypes';
import EventActions from '../EventActions';

import { Location } from './Location';
import { Subheader } from './Subheader';

export interface EventProps {
  readonly eventId: number;
  readonly location: string;
  readonly locationMapsUrl?: string;
  readonly rsvpStatus: RsvpStatus;
  readonly startTime?: number;
  readonly teamId: number;
  readonly teamPhotoUrl: string | null;
  readonly title: string;
}

export const Event: FC<EventProps> = ({
  eventId,
  location,
  locationMapsUrl,
  rsvpStatus,
  startTime,
  teamId,
  teamPhotoUrl,
  title,
}) => {
  return (
    <Card component="article" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        avatar={<Avatar aria-label="teamPhoto" src={teamPhotoUrl ?? ''} />}
        title={title}
        subheader={<Subheader startTime={startTime} />}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Location locationName={location} locationUrl={locationMapsUrl} />
      </CardContent>
      <CardActions disableSpacing>
        <EventActions rsvpStatus={rsvpStatus} teamId={teamId} eventId={eventId} />
      </CardActions>
    </Card>
  );
};

export default Event;

import { useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';
import { FC } from 'react';

import getCurrentUserEvents from '../../graphql/queries/getCurrentUserEvents';
import { GetCurrentUserEvents } from '../../graphql/types/GetCurrentUserEvents';
import Event from '../Event';
import SkeletonEvent from '../SkeletonEvent';

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const EventList: FC = () => {
  const { loading, data, error } = useQuery<GetCurrentUserEvents>(getCurrentUserEvents);

  if (loading) {
    return (
      <>
        <Grid item xs={4}>
          <SkeletonEvent />
        </Grid>
        <Grid item xs={4}>
          <SkeletonEvent />
        </Grid>
        <Grid item xs={4}>
          <SkeletonEvent />
        </Grid>
      </>
    );
  }

  if (error || !data) {
    return (
      <Grid item xs={8}>
        Some error
      </Grid>
    );
  }

  const { currentUser } = data;

  const events = currentUser.events.filter(notEmpty);

  if (events.length > 0) {
    return (
      <>
        {events.map((e) => (
          <Grid item xs={6} key={e.id} style={{ display: 'flex' }}>
            <Event
              eventId={e.id}
              teamId={e.team.id}
              title={e.title}
              teamPhotoUrl={e.team.photoThumbnailUrl}
              location={e.location ? e.location.name : ''}
              locationMapsUrl={e.location?.googleMapsUrl ?? undefined}
              startTime={e.startTimestamp ?? undefined}
              rsvpStatus={e.viewerRsvpStatus}
            />
          </Grid>
        ))}
      </>
    );
  }

  return <>No events scheduled</>;
};

export default EventList;

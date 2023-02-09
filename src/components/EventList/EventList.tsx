import { useQuery } from '@apollo/client';
import { Box, Grid } from '@mui/material';
import { FC } from 'react';

import getCurrentUserEvents from '../../graphql/queries/getCurrentUserEvents';
import { GetCurrentUserEventsQuery } from '../../graphql/types/getCurrentUserEvents';
import Event from '../Event';
import { Loading } from './Loading';

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const EventList: FC = () => {
  const { loading, data, error } = useQuery<GetCurrentUserEventsQuery>(getCurrentUserEvents);

  if (loading) {
    return <Loading />;
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
      <Box sx={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' }}>
        {events.map((e) => (
          <Event
            key={e.id}
            eventId={e.id}
            teamId={e.team.id}
            title={e.title}
            teamPhotoUrl={e.team.photoThumbnailUrl ?? null}
            location={e.location ? e.location.name : ''}
            locationMapsUrl={e.location?.googleMapsUrl ?? undefined}
            startTime={e.startTimestamp ?? undefined}
            rsvpStatus={e.viewerRsvpStatus}
          />
        ))}
      </Box>
    );
  }

  return <>No events scheduled</>;
};

export default EventList;

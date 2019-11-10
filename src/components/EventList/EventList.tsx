import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import getCurrentUserEvents from '../../graphql/queries/getCurrentUserEvents';
import { GetCurrentUserEvents } from '../../graphql/types/GetCurrentUserEvents';
import { CircularProgress, List, ListItem } from '@material-ui/core';
import Event from '../Event';

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const EventList: FC = () => {
  const { loading, data, error } = useQuery<GetCurrentUserEvents>(getCurrentUserEvents);

  if (loading) {
    return <CircularProgress color="secondary" />;
  }

  if (error || !data) {
    return <>Some error</>;
  }

  const { currentUser } = data;

  const events = currentUser.events.filter(notEmpty);

  if (events.length > 0) {
    return (
      <List>
        {events.map(e => (
          <ListItem key={e.eventId}>
            <Event
              title={e.title}
              teamPhotoUrl={e.team.photoThumbnailUrl}
              location={e.location ? e.location.name : ''}
              startTime={e.startTimestamp ? new Date(e.startTimestamp * 1000) : undefined}
              rsvpStatus={e.viewerRsvpStatus}
            />
          </ListItem>
        ))}
      </List>
    );
  }

  return <>No events scheduled</>;
};

export default EventList;

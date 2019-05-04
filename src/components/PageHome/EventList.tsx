import React, { FC } from 'react';
import getCurrentUserEvents from '../../graphql/queries/getCurrentUserEvents';
import { ChildDataProps, withQuery } from 'react-apollo';
import { GetCurrentUserEvents } from '../../graphql/types/GetCurrentUserEvents';
import { CircularProgress, List, ListItem } from '@material-ui/core';
import Event from '../Event';

export type EventProps = ChildDataProps<{}, GetCurrentUserEvents, {}>;

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const EventList: FC<EventProps> = ({ data: { loading, error, currentUser } }) => {
  if (loading) {
    return <CircularProgress color="secondary" />;
  }

  if (error || !currentUser) {
    return <>'Some error'</>;
  }

  const events = currentUser.events.filter(notEmpty);

  if (events.length > 0) {
    return (
      <List>
        {events.map(e => (
          <ListItem>
            <Event
              title={e.title.replace('&nbsp;', ' ')}
              teamPhotoUrl={e.team.photoThumbnailUrl}
              location={e.location ? e.location.name : ''}
              startTime={e.startTimestamp ? new Date(e.startTimestamp * 1000) : undefined}
            />
          </ListItem>
        ))}
      </List>
    );
  }

  return <>No events scheduled</>;
};

export default withQuery<{}, GetCurrentUserEvents, {}>(getCurrentUserEvents)(EventList);

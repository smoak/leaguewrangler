import { Container, Typography } from '@mui/material';

import EventList from '../EventList';

export const PageHome = () => {
  return (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        Events
      </Typography>
      <Container maxWidth="md">
        <EventList />
      </Container>
    </>
  );
};

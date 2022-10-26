import { Theme, WithStyles, createStyles, withStyles, Grid, Typography, Container } from '@material-ui/core';
import { FC } from 'react';

import EventList from '../EventList';

const styles = (theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(2),
    },
  });

export type PageHomeProps = WithStyles<typeof styles>;

export const PageHome: FC<PageHomeProps> = ({ classes }) => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" className={classes.main}>
        Events
      </Typography>
      <Grid container spacing={2}>
        <EventList />
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(PageHome);

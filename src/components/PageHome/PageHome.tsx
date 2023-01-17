import { Theme, Grid, Typography, Container } from '@mui/material';
import { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
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

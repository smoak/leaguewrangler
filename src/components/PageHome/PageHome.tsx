import React, { FC } from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

import EventList from './EventList';

const styles = (theme: Theme) =>
  createStyles({
    main: {
      width: 'auto',
      alignContent: 'center',
      display: 'block', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  });

export type PageHomeProps = WithStyles<typeof styles>;

const PageHome: FC<PageHomeProps> = ({ classes }) => {
  return (
    <div className={classes.main}>
      <EventList />
    </div>
  );
};

export default withStyles(styles)(PageHome);

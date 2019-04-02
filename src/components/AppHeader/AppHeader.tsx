import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import React, { SFC } from 'react';
import { Typography } from '@material-ui/core';
import UserAvatar from '../UserAvatar';

const styles = createStyles({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  grow: {
    flexGrow: 1,
  },
});

export const AppHeader: SFC<WithStyles<typeof styles>> = ({ classes }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {process.env.REACT_APP_WEBSITE_NAME}
        </Typography>
        <UserAvatar />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(AppHeader);

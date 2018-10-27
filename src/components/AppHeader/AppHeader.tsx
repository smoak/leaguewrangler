import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import React, { SFC } from 'react';

const styles = createStyles({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const AppHeader: SFC<WithStyles<typeof styles>> = ({ classes }) => {
  return (
    <header className="AppHeader y-hc-border-bottom" role="banner">
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default withStyles(styles)(AppHeader);
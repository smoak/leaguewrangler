import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';

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

export const AppHeader: FC<WithStyles<typeof styles>> = ({ classes }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          size="large">
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

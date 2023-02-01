import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

import UserAvatar from '../UserAvatar';

export const AppHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="Menu" sx={{ mr: 2 }} size="large">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          {process.env.REACT_APP_WEBSITE_NAME}
        </Typography>
        <UserAvatar />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

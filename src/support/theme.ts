import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';

export default createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: purple,
  },
  typography: {
    useNextVariants: true,
  },
});

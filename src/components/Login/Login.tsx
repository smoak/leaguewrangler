import { Avatar, Paper, Typography } from '@mui/material';
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FC } from 'react';

import Form from './Form';
import styles from './styles';

export const Login: FC<WithStyles<typeof styles>> = ({ classes }) => {
  return (
    <div className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form formClassname={classes.form} submitButtonClassname={classes.submit} />
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Login);

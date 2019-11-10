import React, { FC } from 'react';
import { Paper, Avatar, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import styles from './styles';
import Form from './Form';

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

import React, { FC } from 'react';
import { FormControl, InputLabel, Input, FormControlLabel, Checkbox, Button } from '@material-ui/core';

export interface FormProps {
  readonly formClassname: string;
  readonly submitButtonClassname: string;
}

export const Form: FC<FormProps> = ({ submitButtonClassname, formClassname }) => {
  return (
    <div className={formClassname}>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input id="username" name="username" autoComplete="username" autoFocus />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input name="password" type="password" id="password" autoComplete="current-password" />
      </FormControl>
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
      <Button type="submit" fullWidth variant="contained" color="primary" className={submitButtonClassname}>
        Sign in
      </Button>
    </div>
  );
};

export default Form;

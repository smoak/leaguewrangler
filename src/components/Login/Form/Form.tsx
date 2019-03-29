import React, { FC, useState } from 'react';
import { FormControl, InputLabel, Input, FormControlLabel, Checkbox, Button } from '@material-ui/core';

export interface FormProps {
  readonly formClassname: string;
  readonly submitButtonClassname: string;
}

export const Form: FC<FormProps> = ({ submitButtonClassname, formClassname }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={formClassname}>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          name="username"
          autoComplete="username"
          autoFocus={true}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          name="password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </FormControl>
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
      <Button type="submit" fullWidth variant="contained" color="primary" className={submitButtonClassname}>
        Sign in
      </Button>
    </div>
  );
};

export default Form;

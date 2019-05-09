import React, { FC, useState } from 'react';
import { FormControl, InputLabel, Input, FormControlLabel, Checkbox, Button } from '@material-ui/core';

export interface FormProps {
  readonly formClassname: string;
  readonly submitButtonClassname: string;
  readonly onSignInClicked: (username: string, password: string) => void;
  readonly hasError: boolean;
}

export const Form: FC<FormProps> = ({ submitButtonClassname, formClassname, onSignInClicked, hasError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={formClassname}>
      <FormControl margin="normal" required fullWidth error={hasError}>
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
      <FormControl margin="normal" required fullWidth error={hasError}>
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
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={submitButtonClassname}
        onClick={e => {
          e.preventDefault();
          onSignInClicked(username, password);
        }}
        disabled={!username || !password}
      >
        Sign in
      </Button>
    </div>
  );
};

export default Form;

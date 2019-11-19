import { useMutation } from '@apollo/react-hooks';
import React, { FC, useCallback } from 'react';
import { FormControl, InputLabel, Input, FormControlLabel, Checkbox, CircularProgress } from '@material-ui/core';

import SignInButton from './SignInButton';
import { CreateUserToken, CreateUserTokenVariables } from 'graphql/types/CreateUserToken';
import CREATE_USER_TOKEN from 'graphql/mutations/createUserToken';
import { setUserToken } from 'support/auth';
import { useControlledInput } from './hooks';

export interface FormProps {
  readonly formClassname: string;
  readonly submitButtonClassname: string;
}

const Form: FC<FormProps> = ({ submitButtonClassname, formClassname }) => {
  const { value: username, onChange: onUsernameChange } = useControlledInput('');
  const { value: password, onChange: onPasswordChange } = useControlledInput('');
  const [createUserToken, { data, error, loading }] = useMutation<CreateUserToken, CreateUserTokenVariables>(
    CREATE_USER_TOKEN
  );

  const onSignInClicked = useCallback(
    () => {
      createUserToken({ variables: { username, password } });
    },
    [createUserToken, username, password]
  );

  if (data && data.createUserToken) {
    setUserToken(data.createUserToken.token);
    window.location.reload();
  }

  const button = loading ? (
    <CircularProgress color="secondary" />
  ) : (
    <SignInButton onClick={onSignInClicked} isDisabled={!username || !password} className={submitButtonClassname} />
  );

  return (
    <div className={formClassname}>
      <FormControl margin="normal" required fullWidth error={!!error}>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          name="username"
          autoComplete="username"
          autoFocus={true}
          value={username}
          onChange={onUsernameChange}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth error={!!error}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          name="password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={onPasswordChange}
        />
      </FormControl>
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
      {button}
    </div>
  );
};

export default Form;

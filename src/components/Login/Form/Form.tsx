import { useMutation } from '@apollo/client';
import { Checkbox, CircularProgress, FormControl, FormControlLabel, Input, InputLabel } from '@material-ui/core';
import { FC, useCallback } from 'react';
import { setUserToken } from 'support/auth';

import CREATE_USER_TOKEN from '../../../graphql/mutations/createUserToken';
import { CreateUserToken, CreateUserTokenVariables } from '../../../graphql/types/CreateUserToken';

import SignInButton from './SignInButton';
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

  const onSignInClicked = useCallback(() => {
    createUserToken({ variables: { username, password } });
  }, [createUserToken, username, password]);

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
          data-testid="password-textbox"
        />
      </FormControl>
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
      {button}
    </div>
  );
};

export default Form;

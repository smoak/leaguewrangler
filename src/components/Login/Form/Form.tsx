import { useMutation } from '@apollo/client';
import { Checkbox, CircularProgress, FormControlLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { CreateUserTokenMutation, CreateUserTokenMutationVariables } from 'graphql/types/createUserToken';
import { useEffect } from 'react';
import { setUserToken } from 'support/auth';
import { useControlledInput } from './hooks';
import CREATE_USER_TOKEN from '../../../graphql/mutations/createUserToken';
import SignInButton from './SignInButton';

const Form = () => {
  const { value: username, onChange: onUsernameChange } = useControlledInput('');
  const { value: password, onChange: onPasswordChange } = useControlledInput('');
  const [createUserToken, { data, loading }] = useMutation<CreateUserTokenMutation, CreateUserTokenMutationVariables>(
    CREATE_USER_TOKEN
  );

  const onSignInClicked = () => {
    createUserToken({ variables: { username, password } });
  };

  useEffect(() => {
    if (data && data.createUserToken) {
      setUserToken(data.createUserToken.token);
      window.location.reload();
    }
  }, [data]);

  const button = loading ? (
    <CircularProgress color="secondary" />
  ) : (
    <SignInButton onClick={onSignInClicked} isDisabled={false} />
  );

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
        onChange={onUsernameChange}
        value={username}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={onPasswordChange}
        value={password}
      />
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
      {button}
    </Box>
  );
};

export default Form;

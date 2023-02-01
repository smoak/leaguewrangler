import { Button } from '@mui/material';
import { FC } from 'react';

interface SignInButtonProps {
  readonly isDisabled: boolean;
  onClick(): void;
}

const SignInButton: FC<SignInButtonProps> = ({ isDisabled, onClick }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      sx={{ mt: 3, mb: 2 }}
      disabled={isDisabled}
    >
      Sign in
    </Button>
  );
};

export default SignInButton;

import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { FC } from 'react';

import AppBody from '../AppBody';
import AppHeader from '../AppHeader';
import Login from '../Login';

export interface MappedStateProps {
  readonly isAuthenticated: boolean;
}

export type AppProps = MappedStateProps;

const App: FC<AppProps> = ({ isAuthenticated }) => {
  return (
    <>
      <CssBaseline />
      <AppHeader />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pb: 6,
          }}
        >
          <Container maxWidth="lg">{isAuthenticated ? <AppBody /> : <Login />}</Container>
        </Box>
      </main>
    </>
  );
};

export default App;

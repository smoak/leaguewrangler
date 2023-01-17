import createStyles from '@mui/styles/createStyles';

const styles = (): ReturnType<typeof createStyles> =>
  createStyles({
    card: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  });

export default styles;

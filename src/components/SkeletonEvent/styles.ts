import { createStyles } from '@material-ui/core/styles';

export default (): ReturnType<typeof createStyles> =>
  createStyles({
    card: {
      maxWidth: 354,
      width: '100%',
    },
  });

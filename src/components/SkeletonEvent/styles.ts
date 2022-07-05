import { createStyles } from '@material-ui/core/styles';

const styles = (): ReturnType<typeof createStyles> =>
  createStyles({
    card: {
      maxWidth: 354,
      width: '100%',
    },
  });

export default styles;

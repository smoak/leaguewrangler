import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import Skeleton from '@mui/material/Skeleton';
import { FC } from 'react';

import styles from './styles';

type SkeletonEventProps = WithStyles<typeof styles>;

export const SkeletonEvent: FC<SkeletonEventProps> = ({ classes }) => {
  const { card } = classes;

  const skeletonTitle = <Skeleton height={6} />;
  const skeletonSubheader = <Skeleton height={6} width="80%" />;

  return (
    <Card className={card}>
      <CardHeader
        avatar={<Skeleton variant="circular" width={40} height={40} />}
        title={skeletonTitle}
        subheader={skeletonSubheader}
      />
      <CardContent>
        <Skeleton variant="rectangular" height={50} />
      </CardContent>
      <CardActions>
        <IconButton size="large">
          <Skeleton variant="rectangular" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(SkeletonEvent);

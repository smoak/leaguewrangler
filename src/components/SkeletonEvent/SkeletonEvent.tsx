import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import React, { FC } from 'react';

import styles from './styles';

type SkeletonEventProps = WithStyles<typeof styles>;

export const SkeletonEvent: FC<SkeletonEventProps> = ({ classes }) => {
  const { card } = classes;

  const skeletonTitle = <Skeleton height={6} />;
  const skeletonSubheader = <Skeleton height={6} width="80%" />;

  return (
    <Card className={card}>
      <CardHeader
        avatar={<Skeleton variant="circle" width={40} height={40} />}
        title={skeletonTitle}
        subheader={skeletonSubheader}
      />
      <CardContent>
        <Skeleton variant="rect" height={50} />
      </CardContent>
      <CardActions>
        <IconButton>
          <Skeleton variant="rect" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(SkeletonEvent);

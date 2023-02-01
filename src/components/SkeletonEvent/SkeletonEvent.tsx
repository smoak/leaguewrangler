import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';

export const SkeletonEvent = () => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
        title={<Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6 }} />}
        subheader={<Skeleton height={10} width="50%" animation="wave" />}
        action={null}
      />
      <CardContent sx={{ flexGrow: 1 }}>
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

export default SkeletonEvent;

import { useQuery } from '@apollo/client';
import { Avatar, CircularProgress } from '@mui/material';
import { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { FC } from 'react';

import getUserAvatarQuery from '../../graphql/queries/getUserAvatar';
import { GetUserAvatarQuery } from '../../graphql/types/getUserAvatar';

const styles = createStyles({
  avatar: {
    margin: 10,
  },
});

export type UserAvatarProps = WithStyles<typeof styles>;

const UserAvatar: FC<UserAvatarProps> = ({ classes }) => {
  const { loading, data } = useQuery<GetUserAvatarQuery>(getUserAvatarQuery);

  if (loading) {
    return <CircularProgress color="secondary" />;
  }

  if (data && data.currentUser) {
    return <Avatar src={data.currentUser.profilePhotoThumbnailUrl} className={classes.avatar} />;
  }

  return <AccountCircle data-testid="avatar-placeholder" />;
};

export default withStyles(styles)(UserAvatar);

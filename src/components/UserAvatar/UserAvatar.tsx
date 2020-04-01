import { useQuery } from '@apollo/react-hooks';
import { Avatar, CircularProgress, WithStyles, createStyles, withStyles } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import getUserAvatarQuery from 'graphql/queries/getUserAvatar';
import { GetUserAvatar } from 'graphql/types/GetUserAvatar';
import React, { FC } from 'react';

const styles = createStyles({
  avatar: {
    margin: 10,
  },
});

export type UserAvatarProps = WithStyles<typeof styles>;

const UserAvatar: FC<UserAvatarProps> = ({ classes }) => {
  const { loading, data } = useQuery<GetUserAvatar>(getUserAvatarQuery);

  if (loading) {
    return <CircularProgress color="secondary" />;
  }
  if (data && data.currentUser) {
    return <Avatar src={data.currentUser.profilePhotoThumbnailUrl} className={classes.avatar} />;
  }
  return <AccountCircle />;
};

export default withStyles(styles)(UserAvatar);

import React, { FC } from 'react';
import { Avatar, createStyles, withStyles, WithStyles, CircularProgress } from '@material-ui/core';
import { ChildDataProps, withQuery } from 'react-apollo';
import { GetUserAvatar } from '../../graphql/types/GetUserAvatar';
import getUserAvatar from '../../graphql/queries/getUserAvatar';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = createStyles({
  avatar: {
    margin: 10,
  },
});

export type UserAvatarProps = WithStyles<typeof styles> & ChildDataProps<{}, GetUserAvatar, {}>;

export const UserAvatar: FC<UserAvatarProps> = ({ classes, data: { loading, currentUser } }) => {
  if (loading) {
    return <CircularProgress color="secondary" />;
  }
  if (currentUser) {
    return <Avatar src={currentUser.profilePhotoThumbnailUrl} className={classes.avatar} />;
  }
  return <AccountCircle />;
};

const UserAvatarWithStyles = withStyles(styles)(UserAvatar);

export default withQuery<{}, GetUserAvatar, {}>(getUserAvatar)(UserAvatarWithStyles);

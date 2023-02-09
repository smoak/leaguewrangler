import { Box } from '@mui/material';
import SkeletonEvent from '../SkeletonEvent';

export const Loading = () => {
  return (
    <Box
      sx={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' }}
      data-testid="skeleton-event-1"
    >
      <SkeletonEvent />
      <SkeletonEvent />
      <SkeletonEvent />
    </Box>
  );
};

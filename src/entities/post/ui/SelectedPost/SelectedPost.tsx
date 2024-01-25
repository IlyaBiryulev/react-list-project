import { Stack, Typography } from '@mui/material';

import { Post } from '../../model/types';

interface Props {
  post: Post;
}

export const SelectedPost = ({ post }: Props) => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={2}>
      <Typography variant="h3">#{post.id}</Typography>
      <Typography variant="h4" textAlign="center">
        {post.title}
      </Typography>
      <Typography variant="body1" textAlign="center">
        {post.body}
      </Typography>
    </Stack>
  );
};

import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';

import { Post } from '../../model/types';

import styles from './PostCard.module.scss';

interface Props {
  post: Post;
  onMoreClick: (id: number) => void;
}

export const PostCard = ({ post, onMoreClick }: Props) => {
  const handleOnMoreClick = () => {
    onMoreClick?.(post.id);
  };
  return (
    <Card>
      <CardHeader title={`${post.id} ${post.title}`} />
      <CardContent>
        <Typography variant="body2" className={styles.post_content}>
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={handleOnMoreClick}>
          More
        </Button>
      </CardActions>
    </Card>
  );
};

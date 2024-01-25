import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';

import { Post } from '@/entities/post/model/types';
import { PostCard } from '@/entities/post/ui/PostCard/PostCard';

import { CustomLoader } from '@/shared/ui/CustomLoader/CustomLoader';

interface Props {
  posts: Post[];
  isLoading: boolean;
}

export const PostsList = ({ posts, isLoading }: Props) => {
  const nav = useNavigate();

  const handleMoreClick = (id: number) => {
    nav(`/${id}`);
  };

  return (
    <Stack spacing={2}>
      {isLoading && <CustomLoader />}
      {posts?.map((post) => <PostCard key={post.id} post={post} onMoreClick={handleMoreClick} />)}
    </Stack>
  );
};

export default PostsList;

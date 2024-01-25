import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { skipToken } from '@reduxjs/toolkit/query';

import { useGetPostByIdQuery } from '@/entities/post/api';
import { SelectedPost } from '@/entities/post/ui/SelectedPost/SelectedPost';

import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper';

const PostPage = () => {
  const nav = useNavigate();
  const params = useParams();
  const { data: selectedPost } = useGetPostByIdQuery(params.id ?? skipToken);

  return (
    <PageWrapper>
      <IconButton onClick={() => nav(-1)}>
        <ArrowBackIcon sx={{ color: '#000' }} />
      </IconButton>
      {selectedPost && <SelectedPost post={selectedPost} />}
    </PageWrapper>
  );
};

export default PostPage;

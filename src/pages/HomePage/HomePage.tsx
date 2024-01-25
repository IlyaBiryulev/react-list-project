import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/store/hook/redux';

import PostsList from '@/features/PostsList/PostsList';
import SearchPost from '@/features/SearchPost/SearchPost';

import { setPage } from '@/entities/page/api/pageSlice';
import { useGetPostsQuery } from '@/entities/post/api';

import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper';

const HomePage = () => {
  /* const [page, setPage] = useState(1); */
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useAppDispatch();
  const { pageNumber } = useAppSelector((state) => state.pageReducer);
  const { data: posts = [], isLoading, isFetching } = useGetPostsQuery(pageNumber);

  const searchPosts = useMemo(() => {
    return posts?.filter((post) => post.title.toLowerCase().includes(searchQuery));
  }, [posts, searchQuery]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        dispatch(setPage());
      }
    };

    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [dispatch, isFetching]);

  return (
    <PageWrapper>
      <SearchPost value={searchQuery} onChange={handleChange} />
      {searchPosts && <PostsList posts={searchPosts} isLoading={isLoading} />}
    </PageWrapper>
  );
};

export default HomePage;
